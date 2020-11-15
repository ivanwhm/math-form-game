import { AbstractControl } from '@angular/forms';

export class MathValidators {
  static addition(form: AbstractControl): null | { addition: boolean } {
    const { a, b, answer } = form.value;
    if (a + b === parseInt(answer, 10)) {
      return null;
    }
    return {
      addition: true,
    };
  }
}
