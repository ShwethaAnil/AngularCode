import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterTestingModule } from "@angular/router/testing";

import { AddreactiveemployeeComponent } from "./addreactiveemployee.component";

describe("AddreactiveemployeeComponent", () => {
  let component: AddreactiveemployeeComponent;
  let fixture: ComponentFixture<AddreactiveemployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddreactiveemployeeComponent],
      imports: [ReactiveFormsModule, RouterTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddreactiveemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component.employeeForm.contains("fullName")).toBeTruthy();
    expect(component.employeeForm.contains("email")).toBeTruthy();
  });

  it("Should make the fullName control require", () => {
    const control = component.employeeForm.get("fullName");
    control.setValue("");
    expect(control.valid).toBeFalsy();
  });
});
