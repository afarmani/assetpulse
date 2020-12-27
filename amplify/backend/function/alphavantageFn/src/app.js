require('dotenv').config()
let unirest = require('unirest');

const express = require('express');
const bodyParser = require('body-parser');
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');

const apiKey = process.env.ALPHA_VANTAGE_API_KEY
const apiUrl = process.env.ALPHA_VANTAGE_URL
const {SymbolInfo} = require("@afarmani/alpha-vantage-library");

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

      for (i = 0; i < resp.body.bestMatches.length; i++) {
        symbolSearchResult.push(new SymbolInfo(resp.body.bestMatches[i]))
      }

      res.json(symbolSearchResult)
    })
    .catch((error) => {
      console.log('symbolsearch::get::GET Request::error::', error)
    })
});

app.listen(3000, function () {
  console.log("AlphaVantage API App Started")
});

module.exports = app
