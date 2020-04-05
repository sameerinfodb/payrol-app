import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromDepartment from '../reducers/department.reducer';

export const selectDepartmentState = createFeatureSelector<fromDepartment.State>(
  fromDepartment.departmentFeatureKey
);
