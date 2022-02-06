import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserNameValidator } from './username.validator'

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  constructor() { }
  submit(event:any){
    console.log(event);
  }
  ngOnInit(): void {
  }

    form = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        UserNameValidator.cannotContainSpace
      ]),
      password:new FormControl('',Validators.required),
    });


    get username (): any{
      return this.form.get('username');
    }


    get password ():any{
      return this.form.get('password');
    }
}
