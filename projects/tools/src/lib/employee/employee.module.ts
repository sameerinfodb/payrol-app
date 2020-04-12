import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import * as fromEmployee from './store/reducers/employee.reducer';
import {EffectsModule} from '@ngrx/effects';
import {EmployeeEffects} from './store/effects/employee.effects';
import {EmployeeFacade} from "./store/facade/employee.facade";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromEmployee.EMPLOYEE_FEATURE_KEY, fromEmployee.employeeReducer),
    EffectsModule.forFeature([EmployeeEffects])
  ],
  providers:[ EmployeeFacade]
})
export class EmployeeModule { }
