import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectoresComponent } from './components/directores/directores.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { MenuComponent } from './menu/menu.component';
import { MatIconModule } from '@angular/material/icon';
import { VentaDeEntradasComponent } from './venta-de-entradas/venta-de-entradas.component';
import { ButacasComponent } from './butacas/butacas.component';
import { ReservaFormComponent } from './reserva-form/reserva-form.component';



@NgModule({
  declarations: [
    AppComponent,
    DirectoresComponent,
    PeliculasComponent,
    MenuComponent,
    VentaDeEntradasComponent,
    ButacasComponent,
    ReservaFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
