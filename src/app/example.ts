export class Example {
  empid: number;
  ename: string;
  gender: string;
  salary: number;
  dob: string;
  address?: string; // optional

  constructor(
    empid?: number,
    ename?: string,
    gender?: string,
    salary?: number,
    dob?: string
  ) {}
}
