import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes
} from '@angular/animations';
@Component({
  selector: 'app-escene',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './escene.component.html',
  styleUrl: './escene.component.css',
  animations: [
    trigger('animaciones', [
      state(
        'start',
        style({
          transform: 'scale(1)' ,
          
        })
      ),
      state(
        'end',
        style({
          transform: 'scale(1)',
         
        })
      ),
    
      transition('start => end', animate('1.5s ease-in-out', keyframes([
        style({ transform: 'scale(1) rotate(0deg)' ,opacity:0.8}, ),
        style({ transform: 'scale(1.6) rotate(360deg)',opacity:0.4}),
        style({ transform: 'scale(1) rotate(720deg)',opacity:1})
      ]))),
      transition('end => start', animate('1.5s ease-in-out', keyframes([
        style({ transform: 'scale(1) rotate(0deg)',opacity:0.8 }),
        style({ transform: 'scale(1.6) rotate(360deg)',opacity:0.4}),
        style({ transform: 'scale(1) rotate(720deg)',opacity:1})
      ]))),
     
    ]),
 ],
})
export class EsceneComponent {
  @Input() frases: any;
  currentStep: number = 0;
  estado: string = 'start';
  avanzar() {
    if (this.currentStep < this.frases.length - 1) {
      this.currentStep++;
      
      if(this.estado=='start'){
        this.estado='end'
      }
      else{
        this.estado='start'
      }

  
   
    }
 

  }

  retroceder() {
    if (this.currentStep > 0) {
      this.currentStep--;
    
      if(this.estado=='end'){
        this.estado='start'
      }
      else{
        this.estado='end'
      }
    }
   
  }


}
