import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  users = [
    {
      id:'1',
      name: 'asa',
      class: 1,
      email: 'asa@gmail.com',
    },
    {
      id:'2',
      name: 'cxv',
      class: 4,
      email: 'cxv@gmail.com',
    },
    {
      id:'3',
      name: 'qwer',
      class: 3,
      email: 'qwer@gmail.com',
    },
    {
      id:'4',
      name: 'uiytu',
      class: 10,
      email: 'uiytu@gmail.com',
    },
  ];

  constructor(private router: Router) {}

  goToProfile(name: string) {
    this.router.navigate(['profile'], { queryParams: { name } });
  }
}
