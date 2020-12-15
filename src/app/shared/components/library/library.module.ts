import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SimpleLabelValueDisplayComponent} from './simple-label-value-display/simple-label-value-display.component';
import {AbbrevDisplayComponent} from './abbrev-display/abbrev-display.component';

@NgModule({
  declarations: [
    SimpleLabelValueDisplayComponent,
    AbbrevDisplayComponent
  ],
  exports: [
    SimpleLabelValueDisplayComponent,
    AbbrevDisplayComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LibraryModule { }
