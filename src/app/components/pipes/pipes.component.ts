import {
  JsonPipe,
  LowerCasePipe,
  SlicePipe,
  UpperCasePipe,
} from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-pipes',
  imports: [UpperCasePipe, LowerCasePipe, SlicePipe, JsonPipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css',
})
export class PipesComponent {
  name: string = 'Kumar';
  person: any = {
    name: 'Kumar',
    occupation: 'Developer',
  };

  courseName = signal<string>('Java');
  changeCourseName() {
    this.courseName.set('Python');
  }
}
