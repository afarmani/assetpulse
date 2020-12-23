import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from 'src/app/app.component';
import {CreatePortfolioComponent} from "./modules/portfolio/pages/create-portfolio/create-portfolio.component";
import {DashboardComponent} from "./modules/dashboard/pages/dashboard/dashboard.component";

const routes: Routes = [
  {
    path: ''
    , component: DashboardComponent
    , data : {
      title : "page.title.dashboard"
    }
  },
  {
    path: 'create-portfolio'
    , component: CreatePortfolioComponent
    , data : {
      title : "page.title.create-portfolio"
    }
  },
  {
    path: 'dashboard'
    , component: DashboardComponent
    , data : {
      title : "page.title.dashboard"
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
