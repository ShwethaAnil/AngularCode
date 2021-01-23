import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-addreactiveemployee",
  templateUrl: "./addreactiveemployee.component.html",
  styleUrls: ["./addreactiveemployee.component.css"],
})
export class AddreactiveemployeeComponent implements OnInit {
  formErrors = {
    fullName: "",
    email: "",
    phone: "",
    skillName: "",
    experienceInYears: "",
    proficiency: "",
  };

  validationMessages = {
    fullName: {
      required: "FullName is required",
      minLength: "FullName must be greater than 2 charectes",
      maxLength: "FullName must be less than 10 charecters",
    },
    email: {
      required: "Email is required",
      emailDomain: " Email Domain should be gmail.com",
    },
    phone: {
      required: "Phone is required",
    },
    skillName: {
      required: "SkillName is required",
    },
    experienceInYears: {
      required: "experienceInYears is required",
    },
    proficiency: {
      required: "proficiency is required",
    },
  };

  employeeForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {}
  ngOnInit() {
    this.employeeForm = this.fb.group({
      fullName: [
        "",
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(10),
        ],
      ],
      contactPreference: ["email"],
      email: ["", Validators.required],
      phone: [""],
      skills: this.fb.group({
        skillName: ["", Validators.required],
        experienceInYears: ["", Validators.required],
        proficiency: ["", Validators.required],
      }),
    });
    this.employeeForm.valueChanges.subscribe((data) => {
      this.logValidationErrors(this.employeeForm);
    });
  }

  logValidationErrors(group: FormGroup = this.employeeForm): void {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key);
      if (abstractControl instanceof FormGroup) {
        this.logValidationErrors(abstractControl);
      } else {
        this.formErrors[key] = "";
        if (
          abstractControl &&
          !abstractControl.valid &&
          (abstractControl.touched || abstractControl.dirty)
        ) {
          const messages = this.validationMessages[key];
          for (const errorKey in abstractControl.errors) {
            if (errorKey) {
              this.formErrors[key] += messages[errorKey] + " ";
            }
          }
        }
      }
    });
  }

  onContactPreferenceChange(selectedValue: string) {
    const phoneFormControl = this.employeeForm.get("phone");
    if (selectedValue === "phone") {
      phoneFormControl.setValidators(Validators.required);
    } else {
      phoneFormControl.clearValidators();
    }
    phoneFormControl.updateValueAndValidity();
  }

  onSubmit() {
    console.log(this.employeeForm.value);
    this.router.navigate(["/emps"]);
  }
}
