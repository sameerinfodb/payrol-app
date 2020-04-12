import {employeeReducer, EmployeeState, initialState} from './employee.reducer';
import {GenericAction} from "../actions/generic-action";
import {EmployeeActionTypes} from "../actions/employee.actions";


describe('Employee Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action:any = {};
      const result = employeeReducer(initialState, action);
      expect(result).toBe(initialState);
    });
  });

  describe('LoadEmployees', () => {
    it('should return loading true', () => {
      const action:any = new GenericAction(EmployeeActionTypes.LoadEmployees);
      const newState = employeeReducer(initialState, action);
      expect(newState.loading).toBe(true);
    });
  });

  describe('LoadEmployeesFailed', () => {
    it('should return loading false and error', () => {
      const error = new Error('http error');
      const employee:EmployeeState ={
          entities:[],
          loading:false,
          loaded:false,
          error:error
      };

      const action:any = new GenericAction<EmployeeActionTypes,EmployeeState>(EmployeeActionTypes.LoadEmployeesFailed,employee);
      const newState = employeeReducer(initialState, action);
      expect(newState.loaded).toBe(false);
      expect(newState.loading).toBe(false);
      expect(newState.error).toBe(error);
    });
  });
});
