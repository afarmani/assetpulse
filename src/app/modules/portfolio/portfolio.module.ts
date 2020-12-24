import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePortfolioComponent } from './pages/create-portfolio/create-portfolio.component';
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [CreatePortfolioComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class PortfolioModule { }
