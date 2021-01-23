import { Component, OnInit } from "@angular/core";
import { Employee } from "../employee";
import { EmployeeService } from "../employee.service";

@Component({
  selector: "app-employeelist",
  templateUrl: "./employeelist.component.html",
  styleUrls: ["./employeelist.component.css"],
})
export class EmployeelistComponent implements OnInit {
  employees: Employee[];
  selectedEmployeeCountRadioButton = "All";
  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.employees = this.employeeService.getEmployees();
  }

  getEmployeeCount(): number {
    return this.employees.length;
  }

  deleteEmployee(i: number) {
    // console.log(JSON.stringify());
    this.employeeService.delete(i);
  }

  getMaleEmployeeCount(): number {
    return this.employees.filter((e) => e.gender.toLowerCase() === "male")
      .length;
  }

  getFemaleEmployeeCount(): number {
    return this.employees.filter((e) => e.gender.toLowerCase() === "female")
      .length;
  }

  onEmployeeCountRadioButtonChange(selectedValue: string) {
    this.selectedEmployeeCountRadioButton = selectedValue;
  }
}
