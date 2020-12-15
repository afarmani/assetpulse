import { Injectable } from '@angular/core';
import {DisplayTemplateItems} from 'src/app/shared/components/display-template-items';
import {SymbolInfoComponent} from 'src/app/modules/dashboard/components/symbol-info/symbol-info.component';

@Injectable({
  providedIn: 'root'
})
export class DisplayTemplateService {

  getDisplayTemplate(key: string){
    //MOCK Service call
    if(key==='APPL'){
      return new DisplayTemplateItems(SymbolInfoComponent, {symbolName: 'Apple', symbolKey: 'APPL'})
    } else if(key==='MSFT'){
      return new DisplayTemplateItems(SymbolInfoComponent, {symbolName: 'Microsoft', symbolKey: 'MSFT'})
    } else if(key==='JNG'){
      return new DisplayTemplateItems(SymbolInfoComponent, {symbolName: 'Johnson & Johnson', symbolKey: 'JNG'})
    } else if(key==='BAM'){
      return new DisplayTemplateItems(SymbolInfoComponent, {symbolName: 'Brookfield Asset Management Inc.', symbolKey: 'BAM'})
    } else if(key==='TU'){
      return new DisplayTemplateItems(SymbolInfoComponent, {symbolName: 'Telus Corp', symbolKey: 'TU'})
    } else if(key==='LYV'){
      return new DisplayTemplateItems(SymbolInfoComponent, {symbolName: 'Live Nation Entertainment Inc.', symbolKey: 'LYV'})
    } else if(key==='EFX'){
      return new DisplayTemplateItems(SymbolInfoComponent, {symbolName: 'Equifax', symbolKey: 'EFX'})
    }
  }

  constructor() { }

}
