import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
// Cada ficha debe incluir la foto del empleado, su nombre, sexo, email, nombre de usuario, ciudad, país y teléfono.
export class CardComponent implements OnInit {
  @Input()name:string = '';
  @Input()age:string = '';
  @Input()genre:string = '';
  @Input()nameUser:string = '';
  @Input()city:string = '';
  @Input()country:string = '';
  @Input()email:string = '';
  @Input()phone:string = '';
  @Input()picture:string = '';
  @Input()time:string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
