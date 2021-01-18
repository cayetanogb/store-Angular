import { Component, OnInit } from '@angular/core';
import { Productos } from '../producto.data';

@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.scss']
})
export class ListaProductoComponent implements OnInit {

  listaProd = Productos;

  constructor() { }

  ngOnInit(): void {
  }

}
