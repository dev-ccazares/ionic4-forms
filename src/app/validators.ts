import { AbstractControl } from '@angular/forms';

export class MyValidators {

  static age(control: AbstractControl) {
    const value = control.value;
    if (value >= 18) {
      return null;
    }
    return {'age': true};
  }
}
