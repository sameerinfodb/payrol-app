

import {Observable, of} from "rxjs";
import { map} from "rxjs/operators";
import {Employee} from "../model/employee.interface";


export class EmployeeAdaptor {
  private static age: string;

  static getEmployees(data: Observable<any>): Observable<Employee[]> {
        return data.pipe(map(data => {
      return data.map(item => {
        return {
          id: item.id,
          first_name: item.first_name,
          last_name: item.last_name,
          age: item.age,
          is_active: item.is_active
        }
      })
    })) as Observable<Employee[]>;
  }


}
