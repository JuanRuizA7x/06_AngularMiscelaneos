import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [ngStyle]="{'font-size.px': tamanio}">
      Tamaño de fuente: {{tamanio}}
    </p>

    <button class="btn btn-primary" (click)="disminuirFuente()">
      <i class="fas fa-minus"></i>
    </button>

    <button class="btn btn-primary" (click)="aumentarFuente()">
      <i class="fas fa-plus"></i>
    </button>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {

  tamanio = 20;

  constructor() { }

  ngOnInit() {
  }

  aumentarFuente() {
    if ( this.tamanio < 50 ) {
      this.tamanio += 5;
    }
  }

  disminuirFuente() {
    if ( this.tamanio > 5 ) {
      this.tamanio -= 5;
    }
  }

}
