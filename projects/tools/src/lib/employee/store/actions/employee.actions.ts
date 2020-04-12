import {Action} from '@ngrx/store';
import {Employee} from "../../model/employee.interface";

export enum EmployeeActionTypes {
  LoadEmployees = '[Employee] Load Employees',
  LoadEmployeesSuccess = '[Employee] Load Employees Success',
  LoadEmployeesFailed = '[Employee] Load Employees Failed'

}

export class LoadEmployees implements Action {
  readonly type = EmployeeActionTypes.LoadEmployees;
}


export class LoadEmployeesSuccess implements Action {
  readonly type = EmployeeActionTypes.LoadEmployeesSuccess;
  constructor(public payload:Employee[]) {
  }
}

export class LoadEmployeesFailed implements Action {
  readonly type = EmployeeActionTypes.LoadEmployeesFailed;
  constructor(public payload:any) {
  }
}

export type EmployeeActions = LoadEmployees | LoadEmployeesFailed | LoadEmployeesSuccess  ;
