import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService extends DataService<any>{

  constructor(http: HttpClient) {

    super(http);
    this.apiUrl += '/venta_entrada/peliculas-espectador';
  }
}
