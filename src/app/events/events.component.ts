import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  imports: [],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {

  handleEvent(event:MouseEvent){
    // console.log(event.target.name); 
    console.log((event.target as Element).classList);
    console.log(event.type);
    
    
  }
  handleInputEvent(event:Event){
    // console.log(event.target.name); 
    console.log((event.target as Element).classList);
    console.log(event.type);
    console.log((event.target as HTMLInputElement).value);
    
    
    
  }
}
