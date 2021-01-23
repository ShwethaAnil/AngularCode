import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-employeecount",
  templateUrl: "./employeecount.component.html",
  styleUrls: ["./employeecount.component.css"],
})
export class EmployeecountComponent implements OnInit {
  @Input()
  all: number;
  @Input()
  male: number;
  @Input()
  female: number;

  selectedRadioButtonValue: string;

  @Output()
  countRadioButtonSelectionChanged = new EventEmitter<string>();

  onRadioButtonSelectionChange() {
    this.countRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
    console.log(this.selectedRadioButtonValue);
  }

  constructor() {}

  ngOnInit() {}
}
