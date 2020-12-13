import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from 'src/app/modules/dashboard/pages/dashboard/dashboard.component';
import {TemplateDisplayComponent} from 'src/app/modules/dashboard/components/template-display/template-display.component';
import {AbbrevDisplayComponent} from 'src/app/shared/components/library/abbrev-display/abbrev-display.component';
import {SymbolInfoComponent} from './components/symbol-info/symbol-info.component';
import {DisplayTemplateDirective} from 'src/app/shared/directives/display-template/display-template.directive';
import { PriceInfoComponent } from './components/price-info/price-info.component';
import { VolumeInfoComponent } from './components/volume-info/volume-info.component';

@NgModule({
  declarations: [
    DashboardComponent,
    TemplateDisplayComponent,
    AbbrevDisplayComponent,
    SymbolInfoComponent,
    DisplayTemplateDirective,
    PriceInfoComponent,
    VolumeInfoComponent
  ],
  exports: [
    DashboardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule {
}
