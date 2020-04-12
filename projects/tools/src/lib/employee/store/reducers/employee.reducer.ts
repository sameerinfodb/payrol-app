import *  as fromEmployee from '../actions/employee.actions';
import {Employee} from '../../model/employee.interface';

export const EMPLOYEE_FEATURE_KEY = 'employee';

export interface EmployeeState {
  entities: { [id: number]: Employee };
  loaded: boolean;
  loading: boolean;
  error?: any; // last none error (if any)
}

export const initialState: EmployeeState = {
  entities: {},
  loaded: false,
  loading: false,
  error: {}
};

export function employeeReducer(
  state = initialState,
  action: fromEmployee.EmployeeActions
): EmployeeState {
  switch (action.type) {
    case fromEmployee.EmployeeActionTypes.LoadEmployees: {
      return {
        ...state,
        loading: true,
      };
    }

    case fromEmployee.EmployeeActionTypes.LoadEmployeesSuccess: {
      const entities = action.payload.reduce(
        (entities: { [id: number]: Employee }, employee: Employee) => {
          return {
            ...entities,
            [employee.id]: employee,
          };
        },
        {
          ...state.entities,
        }
      );

      return {
        ...state,
        loading: false,
        loaded: true,
        entities,
      };
    }

    case fromEmployee.EmployeeActionTypes.LoadEmployeesFailed: {
      return {
        ...state,
        loading: false,
        loaded: false,
        error:action.payload.error
      };
    }

    default:
      return state;
  }
}
