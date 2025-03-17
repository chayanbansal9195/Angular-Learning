import { Component } from '@angular/core';

@Component({
  selector: 'app-for-loop',
  imports: [],
  templateUrl: './for-loop.component.html',
  styleUrl: './for-loop.component.css',
})
export class ForLoopComponent {
  users = ['asa', 'cxv', 'qwer', 'uiytu'];
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

  getName(name:string){
    console.log(name);
    
  }
}
