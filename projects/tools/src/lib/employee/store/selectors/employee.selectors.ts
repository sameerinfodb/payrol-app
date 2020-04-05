import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromEmployee from '../reducers/employee.reducer';

export const selectEmployeeState = createFeatureSelector<fromEmployee.State>(
  fromEmployee.employeeFeatureKey
);
