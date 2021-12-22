import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss']
})
export class PlaceComponent implements OnInit {

  constructor(private router: Router) { }

  labelPrim = "Primary button";
  labelSecond = "Secondary button";
  
  ngOnInit(): void {
  }

  functionCall(event: MouseEvent | undefined, path: string = '') {
    this.router.navigateByUrl(path);
    console.log('functionCall', event);
  }
}
