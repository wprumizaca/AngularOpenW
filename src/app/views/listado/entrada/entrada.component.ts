import { Component, Input, OnInit } from '@angular/core';
import { Entrada } from 'src/app/shared/interfaces/entrada';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent implements OnInit{
  @Input()
  public entrada!: Entrada;

  constructor(){}

  ngOnInit(): void{}

}
