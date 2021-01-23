import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddemployeeComponent } from "./addemployee/addemployee.component";
import { AddreactiveemployeeComponent } from "./addreactiveemployee/addreactiveemployee.component";
import { EmployeeComponent } from "./employee/employee.component";
import { EmployeelistComponent } from "./employeelist/employeelist.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { SampleComponent } from "./sample/sample.component";

const routes: Routes = [
  { path: "emps", component: EmployeelistComponent },
  { path: "emps/:empid", component: EmployeeComponent },
  { path: "add", component: AddemployeeComponent },
  { path: "addr", component: AddreactiveemployeeComponent },
  { path: "user", component: SampleComponent },
  { path: "", redirectTo: "/emps", pathMatch: "full" },
  { path: "**", component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
