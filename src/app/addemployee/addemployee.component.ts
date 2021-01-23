import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Employee } from "../employee";
import { EmployeeService } from "../employee.service";

@Component({
  selector: "app-addemployee",
  templateUrl: "./addemployee.component.html",
  styleUrls: ["./addemployee.component.css"],
})
export class AddemployeeComponent implements OnInit {
  emp = new Employee();
  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}
  ngOnInit() {}
  saveEmployee() {
    console.log(JSON.stringify(this.emp));
    this.employeeService.addEmployee(this.emp);
    this.router.navigate(["/emps"]);
  }
}
