import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeelistingComponent } from "./employeelisting/employeelisting.component";
import {ToolsModule} from "../../../tools/src/lib/tools.module";
import { DepartmentsPageComponent } from './department/containers/departments-page/departments-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {StoreDevtoolsModule} from "@ngrx/store-devtools";

@NgModule({
  declarations: [
    AppComponent,
    EmployeelistingComponent,
    DepartmentsPageComponent
  ],
  imports: [
    BrowserModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: false,
      features: {
        pause: false,
        lock: true,
        persist: true
      }
    }),
    AppRoutingModule,
    ToolsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
