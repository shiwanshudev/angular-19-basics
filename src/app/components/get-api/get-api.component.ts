import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-get-api',
  imports: [],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css',
})
export class GetApiComponent {
  constructor(private http: HttpClient) {}
  userList: any[] = [];
  employeeList: any = [];
  getUsers() {
    this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe((result: any) => (this.userList = result));
  }

  getEmployees() {
    this.http
      .get(
        'https://projectapi.gerasim.in/api/EmployeeManagement/GetAllEmployees'
      )
      .subscribe((result: any) => (this.employeeList = result));
  }
}
