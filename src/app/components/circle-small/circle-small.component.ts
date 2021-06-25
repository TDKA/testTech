import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[app-circle-small]',
  templateUrl: './circle-small.component.html',
  styleUrls: ['./circle-small.component.css']
})
export class CircleSmallComponent implements OnInit {

  @Input() color!: any;
  @Input() textColor!: any;

  constructor() { }

  ngOnInit(): void {
  }

}
