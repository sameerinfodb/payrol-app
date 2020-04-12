import {TestBed} from '@angular/core/testing';
import {provideMockActions} from '@ngrx/effects/testing';
import {Observable} from 'rxjs';
import {cold, hot} from 'jasmine-marbles';
import {EmployeeEffects} from './employee.effects';
import {EmployeeService} from "../../service/employee.service";
import {Employee} from "../../model/employee.interface";
import {LoadEmployees, LoadEmployeesFailed, LoadEmployeesSuccess} from "../actions/employee.actions";

describe('EmployeeEffects', () => {
  let actions$: Observable<any>;
  let effects: EmployeeEffects;
  let employeeService: jasmine.SpyObj<EmployeeService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        EmployeeEffects,
        provideMockActions(() => actions$),
        {
          provide: EmployeeService,
          useValue: {
            getEmployees: jasmine.createSpy()
          }
        }
      ]
    });

    effects = TestBed.inject<EmployeeEffects>(EmployeeEffects);
    employeeService=TestBed.inject(EmployeeService) as jasmine.SpyObj<EmployeeService>;
  });

  describe('LoadEmployees', () => {
    it("should return a stream with employee list loaded action",()=>{
      const employees: Employee[] = [{ id:1,first_name:"",last_name:"",age:10,is_active:true}];
      const action = new LoadEmployees();
      const outcome = new LoadEmployeesSuccess(employees);

      actions$=hot('-a',{a:action});
      const response=cold('-a|',{a:employees});
      employeeService.getEmployees.and.returnValue(response);

      const expected=cold('--b',{b:outcome});
      expect(effects.loadEmployees$).toBeObservable(expected);

    })

    it("should fail and return an action with the error",()=>{
      const error = new Error('some error') as any;
      const action = new LoadEmployees();
      const outcome = new LoadEmployeesFailed(error);

      actions$=hot('-a|',{a:action});
      const response=cold('-#|',{},error);
      employeeService.getEmployees.and.returnValue(response);

      const expected=cold('--(b|)',{b:outcome});
      expect(effects.loadEmployees$).toBeObservable(expected);

    })
  });
});
