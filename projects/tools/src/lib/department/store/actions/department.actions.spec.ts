import * as fromDepartment from './department.actions';

describe('loadDepartments', () => {
  it('should return an action', () => {
    expect(fromDepartment.loadDepartments().type).toBe('[Department] Load Departments');
  });
});
