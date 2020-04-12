import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';

import {catchError, map, switchMap} from 'rxjs/operators';

import * as employeeActions from '../actions/employee.actions';
import {EmployeeService} from "../../service/employee.service";
import {of} from "rxjs";


@Injectable()
export class EmployeeEffects {


  @Effect()
  loadEmployees$ = this.actions$.pipe(
    ofType(employeeActions.EmployeeActionTypes.LoadEmployees),
    switchMap(()=>{
        return this.employeeService.getEmployee().pipe(
          map(employee=>new employeeActions.LoadEmployeesSuccess(employee)),
          catchError(error=>of(new employeeActions.LoadEmployeesFailed(error)))
        );
    })
  );


  constructor(private actions$: Actions<employeeActions.EmployeeActions>,private employeeService:EmployeeService) {}

}
