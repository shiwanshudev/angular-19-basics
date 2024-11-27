import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css',
})
export class DataBindingComponent {
  content: string = 'Hello World!';
  text: string = '';
  state: string = '';
  name: string = '';
  changedText: string = '';

  displayText(event: Event) {
    this.text = 'Working';
  }

  onChangeEvent(event: Event) {
    this.state = (event.target as HTMLSelectElement).value;
  }
  onChangeText(text: string) {
    this.changedText = text;
  }
}
