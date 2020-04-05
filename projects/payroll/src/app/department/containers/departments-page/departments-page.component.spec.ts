import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentsPageComponent } from './departments-page.component';
import { Store, StoreModule } from '@ngrx/store';

describe('DepartmentsPageComponent', () => {
  let component: DepartmentsPageComponent;
  let fixture: ComponentFixture<DepartmentsPageComponent>;
  let store: Store<any>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ DepartmentsPageComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentsPageComponent);
    component = fixture.componentInstance;
    store = TestBed.get<Store>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
