import {NgModule} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  imports: [
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    BrowserAnimationsModule

  ],
  exports: [
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    BrowserAnimationsModule
  ],
})

export class AppMaterialModule {
}
