import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable, Subject } from "rxjs";

import { EmployeeComponent } from "./employee.component";

// class RouterStub {
//   navigate(params) {}
// }

// class ActivatedRouteStub {
//   // private subject = new Subject();
//   // push(value) {
//   //   this.subject.next(value);
//   // }

//   // get params() {
//   //   return this.subject.asObservable();
//   // }
//   params: Observable<any>;
// }
describe("EmployeeComponent", () => {
  let component: EmployeeComponent;
  let fixture: ComponentFixture<EmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => 11,
              },
            },
          },
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it("should redirect the add to the when id is 0", () => {
  //   const router = TestBed.get(Router);
  //   const spy = spyOn(router, "navigate");

  //   const route = TestBed.get(ActivatedRoute);
  //   route.push({ empid: 0 });
  //   expect(spy).toHaveBeenCalledWith(["add"]);
  // });

  // it("should check the ngOnInit for routing parameter", () => {
  //   const router = TestBed.get(Router);
  //   const route = TestBed.get(ActivatedRoute);
  //   const spyRoute = spyOn(route.snapshot.paramMap, "get");
  //   spyRoute.and.returnValue(111);
  //   expect(component).toBeTruthy();
  //   // route.snapshot.paramMap.property = "empid";

  //   // expect(route.snapshot.paramMap.property).toEqual("empid");
  //   expect(route.snapshot.paramMap.property).toEqual(111);
  // });
});
