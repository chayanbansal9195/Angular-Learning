import { afterNextRender, afterRender, Component, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { customComponent } from './customComponent/customComponent.component';
import { CounterComponent } from './counter/counter.component';
import { EventsComponent } from './events/events.component';
import { GetsetvalueComponent } from './getsetvalue/getsetvalue.component';
import { IfElseComponent } from './if-else/if-else.component';
import { ElseIfComponent } from './else-if/else-if.component';
import { ForLoopComponent } from './for-loop/for-loop.component';
import { SignalsComponent } from './signals/signals.component';
import { TwoWayBindComponent } from './two-way-bind/two-way-bind.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { DynamicStyleComponent } from './dynamic-style/dynamic-style.component';
import { DirectiveComponent } from './directive/directive.component';
import { HeaderComponent } from './header/header.component';
import { BasicReactiveFormComponent } from './basic-reactive-form/basic-reactive-form.component';
import { FormGroupReactiveComponent } from './form-group-reactive/form-group-reactive.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { PassDataParentChildComponent } from './pass-data-parent-child/pass-data-parent-child.component';
import { ReuseComponent } from './reuse/reuse.component';
import { PassDataChildParentComponent } from './pass-data-child-parent/pass-data-child-parent.component';
import { PipesComponent } from './pipes/pipes.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { NgFor, NgIf } from '@angular/common';
import { ServiceFileService } from './service/service-file.service';
import { RestServiceComponent } from './rest-service/rest-service.component';
import { JsonServiceComponent } from './json-service/json-service.component';

@Component({
  selector: 'app-root',
  imports: [
    LoginComponent,
    customComponent,
    CounterComponent,
    EventsComponent,
    GetsetvalueComponent,
    IfElseComponent,
    ElseIfComponent,
    ForLoopComponent,
    SignalsComponent,
    TwoWayBindComponent,
    ToDoListComponent,
    DynamicStyleComponent,
    DirectiveComponent,
    HeaderComponent,
    RouterOutlet,
    BasicReactiveFormComponent,
    FormGroupReactiveComponent,
    TemplateDrivenFormComponent,
    PassDataParentChildComponent,
    ReuseComponent,
    PassDataChildParentComponent,
    PipesComponent,
    LifeCycleComponent,
    RestServiceComponent,
    JsonServiceComponent,
    NgIf,
    NgFor,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-test';
  name: string = 'chayan';
  multiDataType: string | number = 'def';
  parentName: string = 'bruce';
  users = ['aAs', 'adg', 'wre', 'fghh', 'uyi'];
  childUsers: undefined | string[];
  counter = 0;
  @ViewChild('lifecycle') LifeCycleComponent: any;

  // for render constructor lifecycle

//   constructor() {
//     console.log("appconstr");
    
//     afterRender(() => {
//       console.log('afterrender');
//     });
//     afterNextRender(()=>{
//       console.log('afterNextrender');
//   })

// }

// for service file

productData:{
  name: string;
  mobile: string;
}[]|undefined
constructor(private servicefile:ServiceFileService){

}
// can be called using ngOnInit also
getProductData(){
  this.productData=this.servicefile.getProductData()
  console.log(this.productData);
  
}


  handleClickEvent() {
    alert('Function called');
    this.otherFunction();
    this.updateName();
  }

  otherFunction() {
    console.log('other function');
  }

  updateName() {
    let num: number;

    this.name = 'xyz';
    num = 86000000000;
    this.multiDataType = 35;
  }

  handleUsers(users: string[]) {
    this.childUsers = users;
  }

  changeCounter() {
    this.counter++;
  }
}
