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

  constructor(private http: HttpClient) {}

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
}
