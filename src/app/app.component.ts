import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
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
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-test';
  name: string = 'chayan';
  multiDataType: string | number = 'def';

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
}
