import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Employee } from "./employee";
import { User } from "./user";

@Injectable({
  providedIn: "root",
})
export class EmployeeService {
  employees: Employee[];
  constructor() {
    this.employees = [
      {
        empid: 111,
        ename: "Aman",
        gender: "Male",
        salary: 567876,
        dob: "12-09-1998",
      },
      {
        empid: 112,
        ename: "Karan",
        gender: "Male",
        salary: 667876,
        dob: "2-09-1998",
      },
      {
        empid: 113,
        ename: "Vinutha",
        gender: "Female",
        salary: 867876,
        dob: "1-09-1998",
      },
      {
        empid: 114,
        ename: "Amulya",
        gender: "Female",
        salary: 967876,
        dob: "6-09-1998",
      },
      {
        empid: 115,
        ename: "Anjali",
        gender: "Female",
        salary: 8767876,
        dob: "2-09-1998",
      },
      {
        empid: 116,
        ename: "Krishna",
        gender: "Male",
        salary: 567876,
        dob: "11-09-1998",
      },
      {
        empid: 117,
        ename: "Ankita",
        gender: "Female",
        salary: 597876,
        dob: "11-09-1998",
        address: "Bangalore",
      },
    ];
  }

  getEmployees(): Employee[] {
    return this.employees;
  }

  addEmployee(employee: Employee): void {
    this.employees.push(employee);
  }

  delete(i: number): void {
    this.employees.splice(i, 1);
  }

  getEmployeeById(empid: number): Employee {
    // emp = new Employee();
    // emp.empid = 111;
    // emp.ename = "Aman";
    // emp.gender = "Male";
    // emp.salary = 5467887;
    // emp.dob = "12-12-2005";

    return new Employee(empid, "Aman", "Male", 546789, "12-12-1988");
  }
}
