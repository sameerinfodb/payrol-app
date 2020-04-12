import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {EmployeelistingComponent} from "./employeelisting/employeelisting.component";
import {ToolsModule} from "../../../tools/src/lib/tools.module";
import {DepartmentsPageComponent} from './department/containers/departments-page/departments-page.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {StoreModule} from "@ngrx/store";
import {EmployeeModule} from "../../../tools/src/lib/employee/employee.module";
import {EffectsModule} from "@ngrx/effects";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {VendorsModule} from "../../../vendors/src/lib/vendors.module";

@NgModule({
  declarations: [
    AppComponent,
    EmployeelistingComponent,
    DepartmentsPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: false,
      features: {
        pause: false,
        lock: true,
        persist: true
      }
    }),
    EffectsModule.forRoot([]),
    VendorsModule,
    EmployeeModule,
    AppRoutingModule,
    ToolsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
