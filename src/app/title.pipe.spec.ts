import { TitlePipe } from "./title.pipe";

describe("TitlePipe", () => {
  const pipe = new TitlePipe();
  it("create an instance", () => {
    expect(pipe).toBeTruthy();
  });

  it("should display name prefixed with gender", () => {
    const result = pipe.transform("Vaishnavi", "Female");
    expect(result).toBe("Miss. Vaishnavi");
  });
});
