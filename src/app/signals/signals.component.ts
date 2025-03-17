import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css',
})
export class SignalsComponent {
  x = 10;
  count = signal(10);
  // data:WritableSignal<number|string> = signal(11)
  // data= signal <number|string>(11)
  data:WritableSignal<number|string> = signal <number|string>(11)
  computeVal:Signal<number>=computed(()=>13)
  userName:WritableSignal<string>=signal("abc")
  countVal:WritableSignal<number>=signal(0)
  displayHeading:WritableSignal<boolean>=signal(false)

  constructor() {
    effect(() => {
      console.log(this.count());
      console.log(this.userName())
      if(this.countVal()==2){
        this.displayHeading.set(true)
        setTimeout(()=>{
          this.displayHeading.set(false)
        },2000)
      }else{
        this.displayHeading.set(false)
      }
    });
  }

  updateValue(val: string) {
    if (val == 'inc') this.count.set(this.count() + 1);
    else this.count.set(this.count() - 1);
  }

  updateData(){
    this.data.set("hello")
  }

  toggleDisplay(){
    this.countVal.set(this.countVal()+1);
  }

}
