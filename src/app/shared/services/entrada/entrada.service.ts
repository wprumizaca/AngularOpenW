import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Entrada } from '../../../shared/interfaces/entrada';

// Este servicio lo vamos a poder usar en cualquier punto de nuesta applicacion
@Injectable({
  providedIn: 'root'
})
export class EntradaService {

  constructor(private httpClient: HttpClient) { }

  public recuperarEntradas(): Observable<any> {

    return this.httpClient.get<any>('https://jsonplaceholder.typicode.com/posts');
  }



}
