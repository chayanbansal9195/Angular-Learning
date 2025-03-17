import { Component } from '@angular/core';

@Component({
  selector: 'app-getsetvalue',
  imports: [],
  templateUrl: './getsetvalue.component.html',
  styleUrl: './getsetvalue.component.css'
})
export class GetsetvalueComponent {
  name=""
  displayName=""
  nameRef=""
  displayNameRef=""
  getName(event:Event){
    this.name = (event.target as HTMLInputElement).value
  }

  showName(){
    this.displayName=this.name
  }

  setName(){
    this.name="Sam"
  }

  getNameRef(nameRef:string){
    this.nameRef=nameRef    
  }

  showNameRef(){
    this.displayNameRef=this.nameRef
  }

  setNameRef(){
    this.nameRef="nameRef"  
  }

}
