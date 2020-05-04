import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

import { MyValidators } from '../validators';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.buildForm();
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.form.value);
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      cellphone: ['', [Validators.required]],
      text: ['', [Validators.required]],
      age: [0, [Validators.required, MyValidators.age]],
    });

    this.form.valueChanges
    .pipe(
      debounceTime(500)
    )
    .subscribe(value => {
      console.log(value);
    });

    this.emailField.valueChanges
    .pipe(
      debounceTime(500)
    )
    .subscribe(value => {
      console.log(value);
    });
  }

  get emailField() {
    return this.form.get('email');
  }

  get ageField() {
    return this.form.get('age');
  }

}
