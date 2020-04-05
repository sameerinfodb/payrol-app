import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {EmployeeService} from "./employee/service/employee.service";




@NgModule({
  declarations: [],
  imports: [
    HttpClientModule
  ],
  providers:[HttpClientModule,EmployeeService],
  exports: []
})
export class ToolsModule { }
