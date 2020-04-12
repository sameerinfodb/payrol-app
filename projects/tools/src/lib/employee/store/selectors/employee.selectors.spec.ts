import * as fromEmployee from '../reducers/employee.reducer';
import {employeeQuery} from './employee.selectors';

describe('Employee Selectors', () => {
  it('should select the feature state', () => {
    const result = employeeQuery.getAllEmployee({
      [fromEmployee.EMPLOYEE_FEATURE_KEY]: {}
    });

    // expect(result).toEqual({});
  });
});
