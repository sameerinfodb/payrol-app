import {Component, Input, OnInit} from '@angular/core';


import {Observable} from "rxjs";
import {Employee} from "../../../../tools/src/lib/employee/model/employee.interface";
import {EmployeeService} from "../../../../tools/src/lib/employee/service/employee.service";
@Component({
  selector: 'app-employeelisting',
  templateUrl: './employeelisting.component.html',
  styleUrls: ['./employeelisting.component.scss']
})
export class EmployeelistingComponent implements OnInit {

  @Input()
  employees$: Observable<Employee[]>;

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit(): void {

    this.employees$ = this.employeeService.getEmployee();


  }


}
