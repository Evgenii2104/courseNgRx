import {Component, OnInit} from '@angular/core'
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
  // @ts-ignore
  form: FormGroup

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.initializeForm()
  }

  initializeForm() {
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: '',
      password: ''
    })
  }
  onSubmit() {
    console.log(this.form.value)
  }
}