import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Producto } from '../model/producto';
import { Productos } from '../producto.data';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {

  @Input() id: number;
  @Input() imagen: string;
  @Input() nombre: string;
  @Input() puntuacion: number;
  @Input() precio: number;

  constructor() { }

  ngOnInit(): void {
  }

}
