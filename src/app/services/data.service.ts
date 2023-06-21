import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PageableRequest } from '../interfaces/pageable-request';
import { PagedResponseDto } from '../clases/paged-response.dto';

@Injectable({
  providedIn: 'root'
})
export class DataService<T> {

  protected apiUrl = 'http://localhost:8080/api';

  butacas : {
    libres : any[],
    ocupadas : any[]
  };



  constructor(private http: HttpClient) {
  }

  public getData(pageable: PageableRequest, idEspectador?: number): Observable<PagedResponseDto<T>> {
    let params = new HttpParams();
    params = params.set('page', pageable.page.toString());
    params = params.set('size', pageable.size.toString());
    params = params.set('sort', pageable.sort);
    //CUIDADO CON ESTO, hay que pasarle este atributo
    params = params.set('idEspectador', 4);

    if (idEspectador != null) {
      params = params.set('idEspectador', 4);
    }

    return this.http.get<PagedResponseDto<T>>(`${this.apiUrl}`, { params });
  }

  public getButacasDto(titulo : string) : any{
    let params = new HttpParams();
    params = params.set('titulo', titulo);
    this.http.get<PagedResponseDto<T>>(`${this.apiUrl}`, { params }).subscribe(data => {
      let emision : any;
      console.log(data.lista[0])
      emision = data.lista[0];
      let params = new HttpParams();
      params = params.set('numeroSala', emision['numeroSala']);
      params = params.set('tituloPelicula', emision['tituloPelicula']);
      params = params.set('fecha', emision['fecha']);
      this.http.get<any>(`http://localhost:8080/api/venta_entrada/butacas_disponibles`, { params }).subscribe(data => {
        console.log(data['disponibles'])
        this.butacas.libres = data.disponibles
        this.butacas.ocupadas = data['ocupadas']
      })
    });
    console.log(this.butacas)
    return this.butacas;
  }
}
