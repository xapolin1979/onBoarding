import { Injectable } from '@angular/core';
import {iStep} from './interfaces/index'
@Injectable({
  providedIn: 'root'
})
export class StepsService {
  frases: iStep[] = [
    { title: 'Dedica moltes hores', description: 'Un mínim de 30 hores a la setmana. Si no en tens prou, hauràs de dedicar-li més hores. Al principi sembla impossible, però notaràs una millora ràpidament.',img:'../../assets/img/time_managment.svg',bgcolor:'#4da2a9' },
    { title: 'Programa projectes propis', description: 'Més val 10 hores treballant en projectes propis, que 10 hores mirant tutorials. La motivació i la implicació en el projecte ajudarà a accelerar el teu aprenentatge.' ,img:'../../assets/img/programming.svg',bgcolor:'#d3d4d9'},
    { title: 'Procura descansar', description: 'Descansar bé i desconnectar són vitals.D´aquesta manera reduiràs l´estrès i l´ansietat. Milloraràs la teva concentració i consolidaràs el teu aprenentatge.',img:'../../assets/img/meditation.svg' ,bgcolor:'#ffd167'}
  ];

  constructor() { }
}
