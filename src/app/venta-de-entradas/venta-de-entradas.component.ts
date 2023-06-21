import { Component } from '@angular/core';

@Component({
  selector: 'app-venta-de-entradas',
  templateUrl: './venta-de-entradas.component.html',
  styleUrls: ['./venta-de-entradas.component.css']
})
export class VentaDeEntradasComponent {
  
  tituloPeli : string = ''; 
  flag : number = 0;
  componenteVisible : string = 'pelis';

  ngOnInit(){
    
  }

  cambiarComponenteVisible(componente : string){
    this.componenteVisible = componente;
  }

  recibirTitulo(titulo : string) {
    console.log(titulo)
    this.tituloPeli = titulo;
  }
}
