import { Action, createReducer, on } from '@ngrx/store';
import * as DepartmentActions from '../actions/department.actions';

export const departmentFeatureKey = 'department';

export interface State {

}

export const initialState: State = {

};

const departmentReducer = createReducer(
  initialState,

  on(DepartmentActions.loadDepartments, state => state),
  on(DepartmentActions.loadDepartmentsSuccess, (state, action) => state),
  on(DepartmentActions.loadDepartmentsFailure, (state, action) => state),

);

export function reducer(state: State | undefined, action: Action) {
  return departmentReducer(state, action);
}
