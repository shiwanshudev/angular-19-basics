import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  imports: [],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css',
})
export class DataBindingComponent {
  content: string = 'Hello World!';
  text: string = '';
  state: string = '';

  displayText(event: Event) {
    this.text = 'Working';
  }

  onChangeEvent(event: Event) {
    this.state = (event.target as HTMLSelectElement).value;
  }
}
