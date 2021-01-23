import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { RainbowDirective } from "../rainbow.directive";

import { EmployeecountComponent } from "./employeecount.component";

describe("EmployeecountComponent", () => {
  let component: EmployeecountComponent;
  let fixture: ComponentFixture<EmployeecountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeecountComponent, RainbowDirective],
      imports: [FormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeecountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should have background color ", () => {
    const span = fixture.nativeElement.querySelector("span");
    const bgColor = span.style.backgroundColor;

    expect(bgColor).toBe("yellow");
  });
});
