import { AbstractControl, ValidationErrors } from "@angular/forms";

export class MustBe {
  // implements ValidatorFn
  static equals42(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string) != "42")
      return { equals42: { expected: "42", was: control.value } };

    return null;
  }
}
