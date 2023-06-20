import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectoresComponent } from './components/directores/directores.component';
import { PeliculasComponent } from './peliculas/peliculas.component';

const routes: Routes = [
  { path: '', redirectTo: '/peliculas', pathMatch: 'full' },
  { path: 'peliculas', component: PeliculasComponent },
  { path: 'directores', component: DirectoresComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
