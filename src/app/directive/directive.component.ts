import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  imports: [NgIf, NgFor],
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.css',
})
export class DirectiveComponent {
  show = true;
  users = ['asa', 'cxv', 'qwer', 'uiytu'];
  login=false
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
}
