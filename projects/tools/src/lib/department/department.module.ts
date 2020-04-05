import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromDepartment from './store/reducers/department.reducer';
import { EffectsModule } from '@ngrx/effects';
import { DepartmentEffects } from './store/effects/department.effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromDepartment.departmentFeatureKey, fromDepartment.reducer),
    EffectsModule.forFeature([DepartmentEffects])
  ]
})
export class DepartmentModule { }
