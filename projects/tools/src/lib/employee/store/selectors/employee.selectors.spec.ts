import * as fromEmployee from '../reducers/employee.reducer';
import { selectEmployeeState } from './employee.selectors';

describe('Employee Selectors', () => {
  it('should select the feature state', () => {
    const result = selectEmployeeState({
      [fromEmployee.employeeFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
