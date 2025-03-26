import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  imports: [],
  templateUrl: './life-cycle.component.html',
  styleUrl: './life-cycle.component.css',
})
export class LifeCycleComponent {
  name = "abc"
  @Input() counter=0
  constructor() {
    console.log('constructor');
    this.name="constr"
  }
  ngOnInit() {
    console.log('ngoninit');
    this.name="ngg"
  }

  ngOnDestroy(){
    console.log("destroy");
    
  }
  ngOnChanges(){
    console.log("ngOnChanges");
    
  }
}
