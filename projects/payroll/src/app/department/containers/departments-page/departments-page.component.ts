import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-departments-page',
  templateUrl: './departments-page.component.html',
  styleUrls: ['./departments-page.component.scss']
})
export class DepartmentsPageComponent implements OnInit {

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
  }

}
