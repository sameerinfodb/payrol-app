import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromEmployee from '../reducers/employee.reducer';
import {EmployeeState} from '../reducers/employee.reducer';

export const getEmployeeState = createFeatureSelector<fromEmployee.EmployeeState>(
  fromEmployee.EMPLOYEE_FEATURE_KEY
);


const getLoaded = createSelector(
  getEmployeeState,
  (state: EmployeeState) => state.loaded
);

const getError = createSelector(
  getEmployeeState,
  (state: EmployeeState) => state.error
);

export const getEmployeeEntities = createSelector(
  getEmployeeState,
  (state: EmployeeState) => state.entities
);

const getAllEmployee = createSelector(
  getEmployeeEntities,
  getLoaded,
  (entities , isLoaded) => {
    return isLoaded ?  Object.keys(entities).map(id => entities[parseInt(id, 10)]) : [];
  }
);
export const employeeQuery = {
  getLoaded,
  getError,
  getAllEmployee
};
