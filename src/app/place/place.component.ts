import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from '../components/modal/modal.component';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss']
})
export class PlaceComponent implements OnInit {

  @ViewChild('modal', {static: false}) modal!: ModalComponent

  constructor(private router: Router) { }

  labelPrim = "Primary button";
  labelSecond = "Secondary button";
  
  ngOnInit(): void {
  }

  functionCall(event: MouseEvent | undefined, path: string = '') {
    this.router.navigateByUrl(path);
    console.log('functionCall', event);
  }

  openModal() {
    this.modal.open();
  }
}
