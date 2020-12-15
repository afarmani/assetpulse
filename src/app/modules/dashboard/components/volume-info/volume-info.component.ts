import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-volume-info',
  templateUrl: './volume-info.component.html',
  styleUrls: ['./volume-info.component.sass']
})
export class VolumeInfoComponent implements OnInit {
  @Input() volumeLabel: string;
  @Input() volumeValue: string;

  constructor() { }

  ngOnInit(): void {
  }

}
