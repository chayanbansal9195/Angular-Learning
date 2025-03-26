import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pass-data-parent-child',
  imports: [],
  templateUrl: './pass-data-parent-child.component.html',
  styleUrl: './pass-data-parent-child.component.css'
})
export class PassDataParentChildComponent {
@Input() parentName:string=''
@Input() city:string=''
}
