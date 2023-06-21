import { Component } from '@angular/core';
import { ButacasService } from '../services/butacas.service';

@Component({
  selector: 'app-butacas',
  templateUrl: './butacas.component.html',
  styleUrls: ['./butacas.component.css']
})
export class ButacasComponent {
  
  titulo : string = 'Training Day';
  
  constructor(private butacasService: ButacasService) {
    
  }

  ngOnInit(){
    this.butacasService.getButacasDto(this.titulo);
  }
}
