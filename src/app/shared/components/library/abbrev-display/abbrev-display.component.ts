import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-abbrev-display',
  templateUrl: './abbrev-display.component.html',
  styleUrls: ['./abbrev-display.component.sass']
})
export class AbbrevDisplayComponent implements OnInit {
  @Input() value: String;
  @Input() key: String;

  constructor() { }

  ngOnInit(): void {
  }

}
