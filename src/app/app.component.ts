import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import { AbstractControl, ValidatorFn } from '@angular/forms';

export function validationDate(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const date = control.value;

    if (date > new Date('01-01-1900')) {
      return null;
    }

    return { smaller: true };
  };
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'test-form';
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      birthday: ['', [Validators.required]],
      gender: ['1', [Validators.required]],
      cellphone: ['', [Validators.required]],
      homephone: [''],
      addresshome: ['', [Validators.required]],
      profession: ['', [Validators.required]],
      incomes: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  onSubmit(formDirective: FormGroupDirective) {
    if (this.form.invalid) {
      return;
    }

    console.log(this.form.value);

    formDirective.resetForm();
    this.form.reset();
  }
}
