import { Component, OnInit, ViewChild } from '@angular/core';
import { DirectorService } from 'src/app/services/director.service';
import { PageableRequest } from 'src/app/interfaces/pageable-request';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { PagedDirectorResponse } from 'src/app/interfaces/paged-director-response';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { PeliculaService } from '../services/pelicula.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})

export class PeliculasComponent implements OnInit{

  displayedColumns: string[] = [];
  dataSource: MatTableDataSource<any>;
  totalElementos: number = 0;
  loading: boolean = false;
  lista: any[] = [];

  /*####################MOVIDA
  movida: string = "uy";
  ##########################*/
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private peliculaService: PeliculaService) {
    this.dataSource = new MatTableDataSource<any>();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.getPeliculas({ page: 0, size: 5, sort: "" });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  private getPeliculas(request: PageableRequest) {

    this.loading = true;
    this.peliculaService.getData(request)
      .subscribe((data: PagedDirectorResponse) => {
        console.log(this.filtrarLista(data.lista))
        this.lista = this.filtrarLista(data.lista);



        // console.log(data);
        this.dataSource.data = this.lista;
        this.totalElementos = data.elementosTotales;
        this.loading = false;
        this.displayedColumns = Object.keys(data.lista[0]);
      }, error => {

        this.loading = false;
      });
  }

  nextPage(event: PageEvent) {
    console.log("Buenas");
    const request: PageableRequest = {
      page: event.pageIndex,
      size: event.pageSize,
      sort: ''
    };
    this.getPeliculas(request);
  }

  filtrarLista(listaAfiltrar : any[]){
    let index = 0;
    listaAfiltrar.forEach(elemento => {
      console.log(elemento.fechaFinEmision)
      
      if(elemento.fechaFinEmision != null) listaAfiltrar.splice(index);
      index++;
    });

    return listaAfiltrar;
  }
}
