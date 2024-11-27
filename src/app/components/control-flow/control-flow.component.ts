import { Component } from '@angular/core';

@Component({
  selector: 'app-control-flow',
  imports: [],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css',
})
export class ControlFlowComponent {
  studentsList = [
    { name: 'Ram Kumar', subject: 'Maths', isActive: true },
    { name: 'Sita Singh', subject: 'Science', isActive: true },
    { name: 'Arjun Patel', subject: 'English', isActive: false },
    { name: 'Radha Gupta', subject: 'History', isActive: true },
    { name: 'Lakshmi Rao', subject: 'Geography', isActive: false },
    { name: 'Mohan Das', subject: 'Physics', isActive: true },
    { name: 'Gita Devi', subject: 'Chemistry', isActive: true },
    { name: 'Krishna Yadav', subject: 'Biology', isActive: false },
    { name: 'Bharat Mehta', subject: 'Computer Science', isActive: true },
    { name: 'Leela Pandey', subject: 'Economics', isActive: true },
  ];
}
