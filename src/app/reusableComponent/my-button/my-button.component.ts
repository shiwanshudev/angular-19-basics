import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-my-button',
  imports: [],
  templateUrl: './my-button.component.html',
  styleUrl: './my-button.component.css',
})
export class MyButtonComponent {
  @Input() btnName: string = '';
  @Output() onBtnClick = new EventEmitter<string>();
  onClick() {
    this.onBtnClick.emit('Hii from button!');
  }
}
