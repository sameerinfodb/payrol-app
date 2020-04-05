import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeelistingComponent} from "./employeelisting/employeelisting.component";


const routes: Routes = [
  {
    path:'',
    component:EmployeelistingComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
