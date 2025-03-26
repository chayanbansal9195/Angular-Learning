import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pass-data-child-parent',
  imports: [],
  templateUrl: './pass-data-child-parent.component.html',
  styleUrl: './pass-data-child-parent.component.css'
})
export class PassDataChildParentComponent {
  @Output() getUsers = new EventEmitter()
  users=["aAs","adg","wre","fghh","uyi"]

  ngOnInit(){
    this.getUsers.emit(this.users)
  }

 
}
