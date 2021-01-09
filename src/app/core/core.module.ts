import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainHeaderComponent} from './header/main-header/main-header.component';
import {SideHeaderComponent} from './header/side-header/side-header.component';
import {SideNavComponent} from './side-nav/side-nav.component';
import {FooterComponent} from './footer/footer.component';
import {RouterModule} from "@angular/router";
import {AppMaterialModule} from "../app-material.module";

@NgModule({
  declarations: [MainHeaderComponent, SideHeaderComponent, SideNavComponent, FooterComponent],
  exports: [
    SideHeaderComponent,
    MainHeaderComponent,
    SideNavComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AppMaterialModule,
  ]
})
export class CoreModule {
}
