import {Component, Input, OnInit} from '@angular/core';
import {symbolInfoOld} from 'src/app/shared/models/symbol-info-old';

@Component({
  selector: 'app-symbol-info',
  templateUrl: './symbol-info.component.html',
  styleUrls: ['./symbol-info.component.sass']
})
export class SymbolInfoComponent implements OnInit {
  @Input() data: symbolInfoOld;

  constructor() { }

  ngOnInit(): void {
  }

}
