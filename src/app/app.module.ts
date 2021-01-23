import { BrowserModule } from "@angular/platform-browser";
import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { EmployeeComponent } from "./employee/employee.component";
import { EmployeelistComponent } from "./employeelist/employeelist.component";
import { TitlePipe } from "./title.pipe";
import { EmployeecountComponent } from "./employeecount/employeecount.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AddemployeeComponent } from "./addemployee/addemployee.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { NavComponent } from "./nav/nav.component";
import { RainbowDirective } from "./rainbow.directive";
import { AddreactiveemployeeComponent } from "./addreactiveemployee/addreactiveemployee.component";
import { SampleComponent } from "./sample/sample.component";
import { EmployeeService } from "./employee.service";

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeelistComponent,
    TitlePipe,
    EmployeecountComponent,
    AddemployeeComponent,
    PagenotfoundComponent,
    NavComponent,
    RainbowDirective,
    AddreactiveemployeeComponent,
    SampleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  providers: [EmployeeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
