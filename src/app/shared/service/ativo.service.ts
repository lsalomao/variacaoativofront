import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ativo } from '../model/ativo.model';

@Injectable({
  providedIn: 'root'
})
export class AtivoService {
  apiUrl = 'https://localhost:7100/valoresativo?ativo=';

  // httpOptions = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  // };


  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Headers':
      'Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
      'Content-Type': 'application/json; charset=UTF-8',
    }),
  };

  constructor(private httpClient: HttpClient) { }


  public getDadosAtivos(codigo: string): Observable<Ativo> {
    return this.httpClient.get<Ativo>(this.apiUrl + codigo, this.httpOptions);
  }
}


