import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CurrencyConverterPipe } from '../pipe/currency-converter.pipe';

@Component({
  selector: 'app-pipes',
  imports: [CommonModule,CurrencyConverterPipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
title="mrmrmrm"
name="Asdasd"
date=new Date()
amount=10
}
