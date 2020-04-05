import { createAction, props } from '@ngrx/store';

export const loadDepartments = createAction(
  '[Department] Load Departments'
);

export const loadDepartmentsSuccess = createAction(
  '[Department] Load Departments Success',
  props<{ data: any }>()
);

export const loadDepartmentsFailure = createAction(
  '[Department] Load Departments Failure',
  props<{ error: any }>()
);
