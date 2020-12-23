import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-price-info',
  templateUrl: './price-info.component.html',
  styleUrls: ['./price-info.component.sass']
})
export class PriceInfoComponent implements OnInit {
  @Input() priceLabel: any;
  @Input() priceValue: any;

  constructor() { }

  ngOnInit(): void {
  }

}
