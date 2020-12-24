import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreatePortfolioComponent} from './pages/create-portfolio/create-portfolio.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [CreatePortfolioComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ]
})
export class PortfolioModule {}
