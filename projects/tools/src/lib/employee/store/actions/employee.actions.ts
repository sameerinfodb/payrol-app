import { Action } from '@ngrx/store';




export enum EmployeeActionTypes {
  LoadEmployees = '[Employee] Load Employees',


}

export class LoadEmployees implements Action {
  readonly type = EmployeeActionTypes.LoadEmployees;
}


export type EmployeeActions = LoadEmployees  ;
