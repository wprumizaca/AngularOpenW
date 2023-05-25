import { Component } from '@angular/core';
import { Entrada } from 'src/app/shared/interfaces/entrada';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  public listadoEntradas: Entrada[];

  constructor(){

    this.listadoEntradas = [
      {
        titulo: 'Introduccion a Angular',
        resumen: 'En esta leccion ...etc'
      },
      {
        titulo: 'Introduccion a Angular2',
        resumen: 'En esta leccion ...etc'
      },
      {
        titulo: 'Introduccion a Angular3',
        resumen: 'En esta leccion ...etc'
      },
    ];
  }

  public mostrarTitulo(titulo:string): void{
    alert(`Entrada seleccionada: ${ titulo}`)
  }
}
