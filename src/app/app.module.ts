import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AmplifyUIAngularModule} from '@aws-amplify/ui-angular';
import {HomeComponent} from './modules/home/pages/home/home.component';
import {ReactiveFormsModule} from '@angular/forms';
import {LoginComponent} from './modules/home/pages/login/login.component';
import {DashboardComponent} from 'src/app/modules/home/pages/dashboard/dashboard.component';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AmplifyUIAngularModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
