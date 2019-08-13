import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.scss']
})

export class FormComponentComponent implements OnInit {
  person: {};
  constructor() {}

  ngOnInit() {
    this.person = {
      firstName: 'Dheeraj',
      lastName: 'Jaiswal'
    };
  }

  submitForm = (form: any) => {
  }

  clearForm = (form: any) => {
    form.reset();
    form.submitted = false;
  }
}
