import {Component, OnInit} from '@angular/core';
import {SymbolInfo} from "@afarmani/alpha-vantage-library";
import {environment} from "src/environments/environment";
import {API} from "aws-amplify";

@Component({
  selector: 'app-create-portfolio',
  templateUrl: './create-portfolio.component.html',
  styleUrls: ['./create-portfolio.component.sass']
})
export class CreatePortfolioComponent implements OnInit {
  symbolSearchResult: SymbolInfo[];
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
        this.symbolSearchResult = resp
      }).catch(error => {
      console.log(error.message)
    });
  }
}
