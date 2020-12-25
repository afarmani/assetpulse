import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SymbolInfo, SymbolSearch} from "@afarmani/alpha-vantage-library";
import {environment} from "src/environments/environment";

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
  }

  searchForSymbol($event: any) {
    this.inputValue = $event.target.value;
    console.log('createPortfolio::searchForSymbol::input::', this.inputValue);
    this.http.get(environment.alphavantageFnHost + '/alphavantage/symbolsearch?keyword=' + this.inputValue)
      .subscribe((data: SymbolSearch) => {
        this.outputBody = JSON.stringify(data, null, 2);
      });
  }
}
