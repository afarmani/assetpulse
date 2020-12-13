import {Component, Input, OnInit} from '@angular/core';
import {symbolInfo} from 'src/app/shared/models/symbol-info';

@Component({
  selector: 'app-symbol-info',
  templateUrl: './symbol-info.component.html',
  styleUrls: ['./symbol-info.component.sass']
})
export class SymbolInfoComponent implements OnInit {
  @Input() data: symbolInfo;

  constructor() { }

  ngOnInit(): void {
  }

}
