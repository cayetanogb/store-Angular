import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-estrella',
  templateUrl: './estrella.component.html',
  styleUrls: ['./estrella.component.scss']
})
export class EstrellaComponent implements OnInit {

  @Input() puntuacion: number;
  vacias: Array<boolean>;

  constructor() { }

  ngOnInit(): void {
    this.vacias = new Array(5 - this.puntuacion);

    for (let i = 0; i < this.vacias.length; i++) {
      this.vacias[i] = true;
    }
  }

}
