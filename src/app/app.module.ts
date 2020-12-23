import {BrowserModule, Title} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AmplifyUIAngularModule} from '@aws-amplify/ui-angular';
import {ReactiveFormsModule} from '@angular/forms';
import {CoreModule} from 'src/app/core/core.module';
import {DashboardModule} from 'src/app/modules/dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AmplifyUIAngularModule,
    ReactiveFormsModule,
    CoreModule,
    DashboardModule
  ],
  providers: [
    Title
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
