import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-simple-label-value-display',
  templateUrl: './simple-label-value-display.component.html',
  styleUrls: ['./simple-label-value-display.component.sass']
})
export class SimpleLabelValueDisplayComponent implements OnInit {
  @Input() label: string;
  @Input() value: string;

  constructor() { }

  ngOnInit(): void {
  }

}
