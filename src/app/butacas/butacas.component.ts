import { Component } from '@angular/core';
import { ButacasService } from '../services/butacas.service';

@Component({
  selector: 'app-butacas',
  templateUrl: './butacas.component.html',
  styleUrls: ['./butacas.component.css']
})
export class ButacasComponent {
  
  titulo : string = 'Training Day';

  butacas : {};
  
  constructor(private butacasService: ButacasService) {
    
  }

  ngOnInit(){
    this.butacas = this.butacasService.getButacasDto(this.titulo);
    console.log(this.butacas)
  }
}
