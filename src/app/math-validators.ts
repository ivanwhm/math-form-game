import { AbstractControl } from '@angular/forms';

export class MathValidators {
  static addition(
    target: string,
    sourceOne: string,
    sourceTwo: string
  ): (
    form: AbstractControl
  ) => {
    addition: boolean;
  } {
    return (form: AbstractControl) => {
      const sum = parseInt(form.value[target], 10);
      const firstNumber = parseInt(form.value[sourceOne], 10);
      const secondNumber = parseInt(form.value[sourceTwo], 10);
      if (firstNumber + secondNumber === sum) {
        return null;
      }
      return {
        addition: true,
      };
    };
  }
}
