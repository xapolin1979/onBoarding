import { Component,Input, } from '@angular/core';
import { EsceneComponent } from '../escene/escene.component';
import {StepsService } from '../steps.service';




@Component({
  selector: 'app-home',
  standalone: true,
  imports: [EsceneComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

@Input() textos:any[];
  constructor(public stepsService: StepsService) {
      
    this.textos=this.stepsService.frases;

   }

 
}
