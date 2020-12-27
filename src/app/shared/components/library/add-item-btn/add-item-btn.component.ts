import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-add-item-btn',
  templateUrl: './add-item-btn.component.html',
  styleUrls: ['./add-item-btn.component.sass']
})
export class AddItemBtnComponent implements OnInit {
  @Input() btnInputText: string;

  constructor() { }

  ngOnInit(): void {
  }

}
