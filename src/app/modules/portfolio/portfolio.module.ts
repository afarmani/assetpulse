import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreatePortfolioComponent} from './pages/create-portfolio/create-portfolio.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {LibraryModule} from "../../shared/components/library/library.module";


@NgModule({
  declarations: [CreatePortfolioComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    LibraryModule
  ]
})
export class PortfolioModule {}
