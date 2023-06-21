import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class ButacasService extends DataService<any>{

  constructor(http: HttpClient) {

    super(http);
    this.apiUrl += '/venta_entrada/emisiones_futuras';
  }
}
