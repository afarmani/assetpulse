import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SymbolInfo} from "../../../../shared/models/symbol-info";
import {SymbolSearch} from "../../../../shared/models/symbol-search";

@Component({
  selector: 'app-create-portfolio',
  templateUrl: './create-portfolio.component.html',
  styleUrls: ['./create-portfolio.component.sass']
})
export class CreatePortfolioComponent implements OnInit {
  outputBody: string;
  inputValue: string;
  increment = 0;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    // this.getHttpTest1();
  }

  searchForSymbol($event: any){
    this.inputValue =  $event.target.value;
    console.log('createPortfolio::searchForSymbol::input::', this.inputValue);
    console.log('${environment.alphaVantageApiKey}')
    this.http.get('https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords='+this.inputValue+'&apikey=${process.env.ALPHA_VANTAGE_API_KEY}', )
      .subscribe((data:  SymbolSearch) => {
        let symbolSearch = new SymbolSearch();
        symbolSearch.bestMatches = new Array<SymbolInfo>();


        for(let i in data.bestMatches){
          let symbolInfo = new SymbolInfo(data.bestMatches[i]);
          symbolSearch.bestMatches.push(symbolInfo);
        }
        this.outputBody = JSON.stringify(symbolSearch,null, 2);
      });
  }
}
