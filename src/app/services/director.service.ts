import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';


@Injectable({
  providedIn: 'root'
})
export class DirectorService extends DataService<any>{

  constructor(http: HttpClient) {
    super(http);
    this.apiUrl = 'http://localhost:8080/api/peliculas'; // URL específica para la entidad "Director"
  }
}
