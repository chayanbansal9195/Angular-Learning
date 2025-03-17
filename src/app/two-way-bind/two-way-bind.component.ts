import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-way-bind',
  imports: [FormsModule],
  templateUrl: './two-way-bind.component.html',
  styleUrl: './two-way-bind.component.css'
})
export class TwoWayBindComponent {
  name="abc"
}
