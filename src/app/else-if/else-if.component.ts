import { Component } from '@angular/core';

@Component({
  selector: 'app-else-if',
  imports: [],
  templateUrl: './else-if.component.html',
  styleUrl: './else-if.component.css'
})
export class ElseIfComponent {
  color = 1

  handleColor(val:number){
    this.color=val
  }

  handleInput(event:Event){
    this.color=parseInt((event.target as HTMLInputElement).value)
  }
}
