import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[app-circle-big]',
  templateUrl: './circle-big.component.html',
  styleUrls: ['./circle-big.component.css']
})
export class CircleBigComponent implements OnInit {

  @Input() text!: string;
  @Input() color!: any;
  @Input() colorArc!: any;
  @Input() star!: any;

  constructor() { }

  ngOnInit(): void {
  }

}
