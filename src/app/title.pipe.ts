import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "title",
})
export class TitlePipe implements PipeTransform {
  transform(value: string, arg: string): string {
    if (arg.toLowerCase() === "male") {
      return "Mr. " + value;
    } else {
      return "Miss. " + value;
    }
  }
}
