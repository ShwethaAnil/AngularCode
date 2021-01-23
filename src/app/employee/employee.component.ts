import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { Employee } from "../employee";
import { EmployeeService } from "../employee.service";

@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.css"],
})
export class EmployeeComponent implements OnInit {
  // empid = 111;
  // ename = "Aman";
  // gender = "Male";
  // salary = 5467887;
  // dob = "12-12-2005";
  empid: any;
  showDetails = false;

  someText = "Nida is so <b>Sweet</b>";

  constructor(private route: ActivatedRoute, private router: Router) {
    if (this.route.snapshot.paramMap.get("empid")) {
      this.empid = this.route.snapshot.paramMap.get("empid");
      console.log(this.empid);
    }
    // this.route.paramMap.subscribe((params: ParamMap) => {
    //   this.empid = params.get("empid");
    //   if (this.empid === 0) {
    //     this.router.navigate(["add"]);
    //   }
    // });
  }

  ngOnInit() {}

  toggle() {
    this.showDetails = !this.showDetails;
  }
}
