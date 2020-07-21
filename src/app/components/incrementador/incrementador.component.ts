import { Component, Input, Output, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html'
})

export class IncrementadorComponent implements OnInit{

  ngOnInit(): void {
   this.btnClass = `btn ${ this.btnClass }`;
  }

  @Input() btnClass: string = 'btn-primary';
  @Input('valor') progreso: number = 30;

  @Output('valor') valorSalida: EventEmitter<number> = new EventEmitter();

  cambiarPocentaje( valor: number ) {

    if (this.progreso >= 100 && valor > 0){
      this.valorSalida.emit(100);
      return this.progreso = 100;
    }

    if (this.progreso <= 0 && valor < 0){
      this.valorSalida.emit(0);
      return this.progreso = 0;
    }

    this.progreso += valor;
    this.valorSalida.emit(this.progreso);
    return `${ this.progreso }%`;
  }

  onChange( nuevoValor: number ){

    if(nuevoValor >= 100){
      this.progreso = 100;
    }
    if(nuevoValor <= 0){
      this.progreso = 0;
    }

    this.valorSalida.emit(nuevoValor);
  }

}
