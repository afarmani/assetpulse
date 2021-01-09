import {Component, OnInit} from '@angular/core';
import {environment} from "src/environments/environment";
import {API} from "aws-amplify";
import {SymbolInfo} from "@afarmani/alpha-vantage-library";

@Component({
  selector: 'app-create-portfolio',
  templateUrl: './create-portfolio.component.html',
  styleUrls: ['./create-portfolio.component.sass']
})
export class CreatePortfolioComponent implements OnInit {
  symbolSearchResult: SymbolInfo[];
  errorNote: string;
  inputValue: string;
  increment = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  searchForSymbol($event: any) {
    this.inputValue = $event.target.value;

    const apiInit = {
      headers: {
      }
      , response: false
      , queryStringParameters: {'keyword': this.inputValue}

    }
    console.log('createPortfolio::searchForSymbol::API GET::', environment.alphavantageApi, environment.symbolSearchPath);
    console.log('createPortfolio::searchForSymbol::API GET::init', apiInit);

    API
      .get(environment.alphavantageApi, environment.symbolSearchPath, apiInit)
      .then(resp => {
        if(resp.serviceErrorNote){
          this.errorNote = resp.serviceErrorNote;
        } else {
          if(resp.length>0){
            this.symbolSearchResult = resp;
            this.errorNote = null;
          } else {
            this.errorNote = 'No results'
          }
        }
      }).catch(error => {
      console.log(error.message)
    });
  }
}
