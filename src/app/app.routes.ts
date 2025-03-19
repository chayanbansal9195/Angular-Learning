import { Routes } from '@angular/router';
import { TwoWayBindComponent } from './two-way-bind/two-way-bind.component';
import { DirectiveComponent } from './directive/directive.component';
import { EventsComponent } from './events/events.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
  {
    path: 'twoWayBind',
    component: TwoWayBindComponent,
  },
  {
    path:'directive',
    component:DirectiveComponent
  },
  {
    path:'',
    component:EventsComponent
  },
  // {
  //   path:'profile',
  //   component:ProfileComponent
  // },
  // for passig common data in route
  {
    path:'profile',
    component:ProfileComponent,
    data:{name:"Chayan Path"}
  },
  // dynamic route
  {
    path:'user/:id/:name',
    component:UserComponent
  },
  // 404 page route
  {
    path:'**',
    component:PageNotFoundComponent
  }
];
