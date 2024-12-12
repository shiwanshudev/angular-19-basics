import {
  JsonPipe,
  LowerCasePipe,
  SlicePipe,
  UpperCasePipe,
} from '@angular/common';
import { Component } from '@angular/core';

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
}
