const {SymbolInfo, ApiErrorNote} = require("@afarmani/alpha-vantage-library");

require('dotenv').config()
let unirest = require('unirest');

const express = require('express');
const bodyParser = require('body-parser');
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');

const apiKey = process.env.ALPHA_VANTAGE_API_KEY
const apiUrl = process.env.ALPHA_VANTAGE_URL


const app = express();
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
});

app.get('/alphavantage/symbolsearch', function (req, res) {
  const queryFunction = 'SYMBOL_SEARCH'
  const keyword = req.query['keyword']
  const query = {
    'function': queryFunction
    , 'keywords': keyword
    , 'apikey': apiKey
  }

  console.log('symbolsearch::get::GET Request::url', apiUrl)
  console.log('symbolsearch::get::GET Request::query', queryFunction, keyword)

  unirest
    .get(apiUrl)
    .header({"useQueryString": true})
    .query(query)
    .then((resp)=>{
      console.log('symbolsearch::get::GET Request::resp status', resp.status)


      let symbolSearchResult = []

      if(resp.body.bestMatches){
        for (i = 0; i < resp.body.bestMatches.length; i++) {
          symbolSearchResult.push(new SymbolInfo(resp.body.bestMatches[i]))
        }
        console.log('symbolsearch::get::GET Request::result length::', resp.body.bestMatches.length)
        res.json(symbolSearchResult)
      } else {
        console.log('symbolsearch::get::GET Request::api-limit-exceeded')
        let apiNote = new ApiErrorNote(resp.body['Note'],'api-limit-hit')
        res.json(apiNote)
      }
    })
    .catch((error) => {
      console.log('symbolsearch::get::GET Request::error::', error)
      res.json({'error': error.message})
    })
});

app.listen(3000, function () {
  console.log("AlphaVantage API App Started")
});

module.exports = app
