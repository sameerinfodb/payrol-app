import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {BehaviorSubject, fromEvent, merge, Observable} from 'rxjs';
import {DataSource} from '@angular/cdk/collections';
import {Employee} from '../../../../tools/src/lib/employee/model/employee.interface';
import {EmployeeFacade} from '../../../../tools/src/lib/employee/store/facade/employee.facade';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {map, withLatestFrom} from 'rxjs/operators';


@Component({
  selector: 'app-employeelisting',
  templateUrl: './employeelisting.component.html',
  styleUrls: ['./employeelisting.component.scss'],
})
export class EmployeelistingComponent implements OnInit {
  displayedColumns = ['id', 'first_name', 'last_name', 'age'];
  dataSource: EmployeeDataSource | null;

  index: number;
  id: number;

  constructor(private employeeFacade: EmployeeFacade) {}


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild('filter', { static: true }) filter: ElementRef;

  ngOnInit(): void {
    this.loadData();
  }

  public loadData() {
    this.employeeFacade.loadAll();
    this.dataSource = new EmployeeDataSource(
      this.employeeFacade,
      this.paginator,
      this.sort
    );
    fromEvent(this.filter.nativeElement, 'keyup')
      // .debounceTime(150)
      // .distinctUntilChanged()
      .subscribe(() => {
        if (!this.dataSource) {
          return;
        }

        this.dataSource.filter = this.filter.nativeElement.value;

      });
  }
}

export class EmployeeDataSource extends DataSource<Employee> {
  _filterChange = new BehaviorSubject('');

  get filter(): string {
    return this._filterChange.value;
  }

  set filter(filter: string) {
    this._filterChange.next(filter);
  }
  filteredDataLength:number=0;


  constructor(
    private employeeFacade: EmployeeFacade,
    public _paginator: MatPaginator,
    public _sort: MatSort
  ) {
    super();
    // Reset to the first page when the user changes the filter.
    this._filterChange.subscribe(() => {
       this._paginator.pageIndex = 0;
    });
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Employee[]> {

    // Listen for any changes in the base data, sorting, filtering, or pagination
    const displayDataChanges = [
      this.employeeFacade.allCategory$,
      this._sort.sortChange,
      this._filterChange,
      this._paginator.page,
    ];

    return merge(...displayDataChanges).pipe(
     withLatestFrom(this.employeeFacade.allCategory$),
     map(([first,employee])=>{

       const filteredData = employee.filter((employee: Employee) => {
         const searchStr = (employee.id + employee.first_name + employee.last_name + employee.age).toLowerCase();
         return searchStr.indexOf(this.filter.toLowerCase()) !== -1;
       });
       this.filteredDataLength=filteredData.length;
       const sortedData = this.sortData(filteredData.slice());
       // Grab the page's slice of the filtered sorted data.
       const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
       return sortedData.splice(startIndex, this._paginator.pageSize);
     })
   );

 }

  disconnect() {}

  /** Returns a sorted copy of the database data. */
  sortData(data: Employee[]): Employee[] {
    if (!this._sort.active || this._sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      let propertyA: number | string = '';
      let propertyB: number | string = '';

      switch (this._sort.active) {
        case 'id':
          [propertyA, propertyB] = [a.id, b.id];
          break;
        case 'first_name':
          [propertyA, propertyB] = [a.first_name, b.first_name];
          break;
        case 'last_name':
          [propertyA, propertyB] = [a.last_name, b.last_name];
          break;
        case 'age':
          [propertyA, propertyB] = [a.age, b.age];
          break;
      }

      const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
      const valueB = isNaN(+propertyB) ? propertyB : +propertyB;

      return (
        (valueA < valueB ? -1 : 1) * (this._sort.direction === 'asc' ? 1 : -1)
      );
    });
  }
}
