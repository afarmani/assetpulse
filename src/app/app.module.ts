import {BrowserModule, Title} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CoreModule} from 'src/app/core/core.module';
import {DashboardModule} from 'src/app/modules/dashboard/dashboard.module';
import {PortfolioModule} from "./modules/portfolio/portfolio.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CoreModule,
    DashboardModule,
    PortfolioModule
  ],
  providers: [
    Title
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
