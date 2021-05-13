import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PeliculasComponent} from "./components/peliculas/peliculas.component";

const routes: Routes = [
   {path: '', redirectTo: '/home', pathMatch: 'full'},
  {
    path: 'home',
    loadChildren: () => import('./components/home/home.module').then(n => n.HomeModule)
  },
  {path: 'Peliculas/:id', component: PeliculasComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
