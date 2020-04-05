
import { EmployeeActions, EmployeeActionTypes } from '../actions/employee.actions';
import {Employee} from "../../model/employee.interface";

export const employeeFeatureKey = 'employee';



export const initialState: Employee = {
  "id": -1,
  "first_name": '',
  "last_name": '',
  "age": -1,
  "is_active": false
};

export function reducer(lastState = initialState, action: EmployeeActions): Employee {
  switch (action.type) {
    case EmployeeActionTypes.LoadEmployees:
      return loadEmployees(lastState, action);
    case EmployeeActionTypes.LoadEmployeesSuccess:
      return loadEmployees(lastState, action);
    case EmployeeActionTypes.LoadEmployeesFailed:
      return loadEmployees(lastState, action);
    default:
      return lastState;
  }
}
