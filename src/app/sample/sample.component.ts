import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "../employee.service";
import { User } from "../user";

@Component({
  selector: "app-sample",
  templateUrl: "./sample.component.html",
  styleUrls: ["./sample.component.css"],
})
export class SampleComponent implements OnInit {
  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {}
}
