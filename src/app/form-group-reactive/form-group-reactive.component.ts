import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-group-reactive',
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './form-group-reactive.component.html',
  styleUrl: './form-group-reactive.component.css'
})
export class FormGroupReactiveComponent {

  name:string|null|undefined=""
  password:string|null|undefined=""
  email:string|null|undefined=""
    profileForm=new FormGroup({
      name:new FormControl("name",[Validators.required]),
      password:new FormControl("pass",[Validators.required,Validators.minLength(5)]),
      email:new FormControl("email",[Validators.required,Validators.maxLength(50),Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')])
    })

    onSubmit(){
      this.name=this.profileForm.value.name
      this.email=this.profileForm.value.email
      this.password=this.profileForm.value.password
    }

    setValue(){
      this.profileForm.setValue({
        name:"peter",
        password:"pass",
        email:"afda"
      })
    }

    // getter method validation
    get name1(){
      return this.profileForm.get('name')
    }
    get email1(){
      return this.profileForm.get('email')
    }
    get pass1(){
      return this.profileForm.get('password')
    }
}
