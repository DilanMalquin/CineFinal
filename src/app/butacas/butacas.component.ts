import { Component } from '@angular/core';
import { ButacasService } from '../services/butacas.service';
import { Butacas } from '../interfaces/butacas';

@Component({
  selector: 'app-butacas',
  templateUrl: './butacas.component.html',
  styleUrls: ['./butacas.component.css']
})
export class ButacasComponent {

  titulo : string = 'Training Day';

  butacasFinales : any[] = [{
    filas : 0,
    columnas: 0
  }];

  butacas : {
    libres : Array<any>,
    ocupadas : Array<any>,
    filas : number,
    columnas : number
  };


  constructor(private butacasService: ButacasService) {

  }

  ngOnInit(){

    let butacas: Butacas;
    butacas =  this.butacasService.getButacasDto(this.titulo);
    console.log(butacas);

    // then(respuesta => {
    //   console.log("HOLA AQUI");
    //   console.log(respuesta)}).catch (

    //     () => console.log("error")) ;

      //   console.log(respuesta);
      //   console.log(respuesta);

    // this.butacasService.getButacasDto(this.titulo); .then( respuesta => {

    //   console.log(respuesta);
    //   // console.log(this.butacasFinales);
    //   // console.log(respuesta);
    //   console.log("FILA: ");
    //   console.log(respuesta.filas);
    //   // for (let i = 0; i < respuesta.filas; i++) {
    //   //   for (let j = 0; j < respuesta.columnas; j++) {
    //   //     this.butacasFinales[i][j] = 'hey';
    //   //   }
    //   // }
    //   console.log(this.butacasFinales);

    // }).catch( () => console.log("hola en error"));
}


  //   console.log(this.butacasFinales);

  //   console.log(this.butacas.libres); });
  //   console.log("HOLA EN BUTACAS");
  //   console.log(this.butacas);
  //   console.log("HOLAE EN FILAS")
  //   console.log(this.butacas.filas);

  //   for (let i = 0; i < this.butacas.filas; i++) {

  //     for (let j = 0; j < this.butacas.columnas; j++) {

  //       this.butacasFinales[i][j] = 'hey';
  //     }
  //     console.log(this.butacasFinales);

  //   }
  //   console.log(this.butacasFinales);

  //   console.log(this.butacas.libres);
  //   // for (let i = 0; i < this.butacas.libres; i++) {

  //   // }

  // }

}
