import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss']
})
export class PlaceComponent implements OnInit {

  constructor() { }

  label = "button label";

  ngOnInit(): void {
  }

  functionCall(event: any) {
    console.log('functionCall', event);
  }
}
