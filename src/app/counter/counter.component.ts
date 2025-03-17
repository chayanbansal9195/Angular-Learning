import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  count: number = 0;

  handleCounter(val: string = '') {
    if (val === 'plus') this.count++;
    else if (val === 'minus' && this.count>0) this.count--;
    else this.count = 0;
  }
}
