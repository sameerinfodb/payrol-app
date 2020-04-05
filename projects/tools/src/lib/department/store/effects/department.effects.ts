import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as DepartmentActions from '../actions/department.actions';



@Injectable()
export class DepartmentEffects {

  loadDepartments$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(DepartmentActions.loadDepartments),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => DepartmentActions.loadDepartmentsSuccess({ data })),
          catchError(error => of(DepartmentActions.loadDepartmentsFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
