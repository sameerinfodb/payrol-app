import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromEmployee from './store/reducers/employee.reducer';
import { EffectsModule } from '@ngrx/effects';
import { EmployeeEffects } from './store/effects/employee.effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromEmployee.employeeFeatureKey, fromEmployee.reducer),
    EffectsModule.forFeature([EmployeeEffects])
  ]
})
export class EmployeeModule { }
