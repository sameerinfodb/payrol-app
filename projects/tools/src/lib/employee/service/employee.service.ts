import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';

import { EmployeeAdaptor } from '../adaptor/employee.adaptor';
import {Employee} from "../model/employee.interface";

const employeesUrl = 'http://localhost:3000/employees';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  getEmployee(): Observable<Employee[]> {
    let employeesUrlResponse = this.http.get(employeesUrl);
    return EmployeeAdaptor.getEmployees(employeesUrlResponse);
  }
}
