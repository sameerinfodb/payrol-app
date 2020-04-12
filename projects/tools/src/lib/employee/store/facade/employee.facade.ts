import {Injectable} from "@angular/core";
import {select, Store} from "@ngrx/store";
import * as fromEmployeeActions from '../actions/employee.actions';
import {EmployeeState} from "../reducers/employee.reducer";
import {employeeQuery} from "../selectors/employee.selectors";


@Injectable()
export class EmployeeFacade{
  loaded$ = this.store.pipe(select(employeeQuery.getLoaded));
  allCategory$ = this.store.pipe(select(employeeQuery.getAllEmployee));
  constructor(private store:Store<EmployeeState>)
  {

  }

  loadAll(){
    this.store.dispatch(new fromEmployeeActions.LoadEmployees() );
  }
}
