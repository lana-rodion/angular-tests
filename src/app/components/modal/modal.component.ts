import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @ViewChild("myModal", { static: false }) modal!: ElementRef;
  @ViewChild("content", { static: false }) content!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  /*
  tryClose() {
    const clickTarget = event.target as HTMLElement;
    if (!(this.content.nativeElement as HTMLElement).contains(clickTarget))
      this.close();
  }*/

  open() {
    this.modal.nativeElement.style.display = "block";
  }

  close() {
    this.modal.nativeElement.style.display = "none";
  }

}
