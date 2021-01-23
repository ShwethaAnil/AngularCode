import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { TitlePipe } from "../title.pipe";

import { EmployeelistComponent } from "./employeelist.component";

describe("EmployeelistComponent", () => {
  let component: EmployeelistComponent;
  let fixture: ComponentFixture<EmployeelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeelistComponent, TitlePipe],
      imports: [RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    // component = new EmployeelistComponent();
  });

  it("should list the employees", () => {
    component.ngOnInit();
    expect(component.employees.length).toBeGreaterThan(0);
  });

  it("should not list the employees", () => {
    component.ngOnInit();
    expect(component.employees.length).not.toBeLessThan(0);
  });
});
