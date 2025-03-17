import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-style',
  imports: [],
  templateUrl: './dynamic-style.component.html',
  styleUrl: './dynamic-style.component.css'
})
export class DynamicStyleComponent {
bgcolor="red"
fontSize="80"
headingBig="100"
headingSmall="20"
zoom=true

toggleButton(){
  this.zoom=!this.zoom
}
}
