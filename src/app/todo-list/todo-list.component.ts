import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  imports: [],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  inputText: string = '';
  todos: string[] = [];
  onInputChange(event: Event) {
    this.inputText = (event.target as HTMLInputElement).value;
  }

  onSubmit() {
    this.todos.push(this.inputText);
  }
}
