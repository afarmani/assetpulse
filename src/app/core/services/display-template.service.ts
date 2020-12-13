import { Injectable } from '@angular/core';
import {AddDisplayTemplateItem} from 'src/app/shared/components/add-display-template-item';
import {SymbolInfoComponent} from 'src/app/modules/dashboard/components/symbol-info/symbol-info.component';

@Injectable({
  providedIn: 'root'
})
export class DisplayTemplateService {

  getDisplayTemplate(key: string){
    //MOCK Service call
    if(key==='APPL'){
      return new AddDisplayTemplateItem(SymbolInfoComponent, {symbolName: 'Apple', symbolKey: 'APPL'})
    } else if(key==='MSFT'){
      return new AddDisplayTemplateItem(SymbolInfoComponent, {symbolName: 'Microsoft', symbolKey: 'MSFT'})
    } else if(key==='JNG'){
      return new AddDisplayTemplateItem(SymbolInfoComponent, {symbolName: 'Johnson & Johnson', symbolKey: 'JNG'})
    } else if(key==='BAM'){
      return new AddDisplayTemplateItem(SymbolInfoComponent, {symbolName: 'Brookfield Asset Management Inc.', symbolKey: 'BAM'})
    } else if(key==='TU'){
      return new AddDisplayTemplateItem(SymbolInfoComponent, {symbolName: 'Telus Corp', symbolKey: 'TU'})
    } else if(key==='LYV'){
      return new AddDisplayTemplateItem(SymbolInfoComponent, {symbolName: 'Live Nation Entertainment Inc.', symbolKey: 'LYV'})
    } else if(key==='EFX'){
      return new AddDisplayTemplateItem(SymbolInfoComponent, {symbolName: 'Equifax', symbolKey: 'EFX'})
    }
  }

  constructor() { }

}
