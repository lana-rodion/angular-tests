import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() label: string = '';
  @Input() color: string = '';
  @Input() background: string = '';
  @Output() click = new EventEmitter<MouseEvent>();

  constructor() { }

  ngOnInit(): void {
  }

  onClickButton(event: MouseEvent | undefined) {
    this.click.emit(event);
  }

}
