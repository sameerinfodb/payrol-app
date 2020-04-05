import { TestBed } from '@angular/core/testing';

import { EmployeeService } from './employee.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';



describe('EmployeeService', () => {
  let service: EmployeeService;
  let httpMock: HttpTestingController;

  const URLService='http://localhost:3000/';
  const employees=[
    {
      "id":"1",
      "first_name": "sam",
      "last_name": "jackson",
      "age": 10,
      "is_active": true
    },
    {
      "id":"2",
      "first_name": "samsom",
      "last_name": "thomas",
      "age": 10,
      "is_active": true
    },
    {
      "id":"3",
      "first_name": "michael",
      "last_name": "jachson",
      "age": 10,
      "is_active": true
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EmployeeService],
    });
    service = TestBed.inject(EmployeeService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should return three employees', () => {

    service.getEmployee().subscribe((employees) => {
      console.log(employees);
      expect(employees.length).toBe(3);
    });
    // checking if valid http verb is used
    const req=httpMock.expectOne(`${URLService}employees`);
    expect(req.request.method).toBe("GET");
    req.flush(employees);
    httpMock.verify();
  });

});
