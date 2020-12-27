import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SimpleLabelValueDisplayComponent} from './simple-label-value-display/simple-label-value-display.component';
import {AbbrevDisplayComponent} from './abbrev-display/abbrev-display.component';
import {AddItemBtnComponent} from './add-item-btn/add-item-btn.component';
import {AppMaterialModule} from "../../../app-material.module";

@NgModule({
  declarations: [
    SimpleLabelValueDisplayComponent,
    AbbrevDisplayComponent,
    AddItemBtnComponent
  ],
  exports: [
    SimpleLabelValueDisplayComponent,
    AbbrevDisplayComponent,
    AddItemBtnComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ]
})
export class LibraryModule {
}
