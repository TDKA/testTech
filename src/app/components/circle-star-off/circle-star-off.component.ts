import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[app-circle-star-off]',
  templateUrl: './circle-star-off.component.html',
  styleUrls: ['./circle-star-off.component.css']
})
export class CircleStarOffComponent implements OnInit {

  @Input() color!: any;
  @Input() colorArc!: any;

  constructor() { }

  ngOnInit(): void {
  }

}
