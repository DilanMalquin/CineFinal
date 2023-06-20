import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectoresComponent } from './components/directores/directores.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { VentaDeEntradasComponent } from './venta-de-entradas/venta-de-entradas.component';

const routes: Routes = [
  { path: '', redirectTo: '/venta-entradas', pathMatch: 'full' },
  { path: 'venta-entradas', component: VentaDeEntradasComponent },
  { path: 'directores', component: DirectoresComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
