import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import * as _ from 'lodash';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.scss']
})

export class FormComponentComponent implements OnInit {
  person: {
    firstName: 'Dheeraj',
    lstName: 'Jaiswal'
  };
  showOutput = false;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
  }

  submitForm = (form: any) => {
    this.showOutput = form.submitted && form.valid;
  }

  clearForm = (form: any) => {
    form.reset();
    form.submitted = false;
    this.showOutput = false;
  }
}
