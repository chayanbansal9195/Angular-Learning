import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-basic-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './basic-reactive-form.component.html',
  styleUrl: './basic-reactive-form.component.css'
})
export class BasicReactiveFormComponent {
name = new FormControl("Enter Name");
password=new FormControl("Enter Pass")


getValue(){
  console.log( this.name.value, this.password.value)
  };
  
setValue(){
  this.name.setValue("Name")
  this.password.setValue("Pass")
}
}
