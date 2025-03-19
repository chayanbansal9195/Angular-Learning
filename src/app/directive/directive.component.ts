import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  imports: [NgIf, NgFor,NgSwitch,NgSwitchCase,NgSwitchDefault],
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.css',
})
export class DirectiveComponent {
  show = true;
  users = ['asa', 'cxv', 'qwer', 'uiytu'];
  login=false
  colors=["red","green","yellow","purple"]
  color=""
  i=0
  students = [
    {
      name: 'asa',
      class: 1,
      email: 'asa@gmail.com',
    },
    {
      name: 'cxv',
      class: 4,
      email: 'cxv@gmail.com',
    },
    {
      name: 'qwer',
      class: 3,
      email: 'qwer@gmail.com',
    },
    {
      name: 'uiytu',
      class: 10,
      email: 'uiytu@gmail.com',
    },
  ];

  toggleShow() {
    this.show = !this.show;
  }

  toggleColor(){
    this.color=this.colors[this.i]
    this.i++
    if(this.i>this.colors.length)
      this.i=0
    console.log(this.i);
    

  }
}
