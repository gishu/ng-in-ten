import { AbstractControl, ValidationErrors } from "@angular/forms";

export class MustBe {
  // implements ValidatorFn
  static equals42(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string) != "42")
      return { equals42: { expected: "42", was: control.value } };

    return null;
  }

  // implements AsyncValidatorFn
  static positive(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if ((control.value as number) < 1) {
          resolve({ positive: { message: "value must be greater than zero" } });
        } else {
          resolve(null);
        }
      }, 4000);
    });
  }
}
