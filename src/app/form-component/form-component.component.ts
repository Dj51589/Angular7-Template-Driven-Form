import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-form-component",
  templateUrl: "./form-component.component.html",
  styleUrls: ["./form-component.component.scss"]
})
export class FormComponentComponent implements OnInit {
  personForm: any;
  degrees = ["Baord", "Graduate", "Post Graduate", "Doctor", "PhD"];
  myhobbies = [{
    name: 'Sports',
    value: 'sports'
  },
  {
    name: 'Music',
    value: 'music'
  },
  {
    name: 'Movie',
    value: 'movie'
  },
  {
    name: 'Reading',
    value: 'reading'
  },
  {
    name: 'Writing',
    value: 'writing'
  }
  ];
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createFormInputs();
  }

  createFormInputs() {
    this.personForm = this.fb.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      maritalStatus: [false],
      qualification: [""],
      contactNumber: [null, Validators.pattern("[]")],
      emailId: [null, Validators.pattern("[]")],
      dob: [null],
      hobbies: this.buildHobbies(),
      address: this.fb.group({
        street: [null],
        city: [null],
        country: [null],
        zipcode: [null]
      }),
      description: [""]
    });
  }

  buildHobbies() {
    const arr = this.myhobbies.map(hobby => {
      return this.fb.control(false);
    });
    return this.fb.array(arr);
  }
}
