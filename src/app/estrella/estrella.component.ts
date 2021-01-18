import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-estrella',
  templateUrl: './estrella.component.html',
  styleUrls: ['./estrella.component.scss']
})
export class EstrellaComponent implements OnInit {

  @Input() puntuacion: number;

  constructor() { }

  ngOnInit(): void {
    let estrellas = new Array(this.puntuacion);
  }

  /*
  estrellasVacias = new Array();
  let i;

  for (i = 0; i < Productos; i++) {
    let num;
    num = 5 - Producto[i].puntuacion;

    estrellasVacias.push(num);    
  }*/

}
