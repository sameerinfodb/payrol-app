import * as fromDepartment from '../reducers/department.reducer';
import { selectDepartmentState } from './department.selectors';

describe('Department Selectors', () => {
  it('should select the feature state', () => {
    const result = selectDepartmentState({
      [fromDepartment.departmentFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
