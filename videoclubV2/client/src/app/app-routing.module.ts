import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PelisListComponent } from './components/pelis-list/pelis-list.component';
import { PelisFormComponent} from './components/pelis-form/pelis-form.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/peliculas',
    pathMatch:'full'
  },
  {
    path: 'peliculas',
    component: PelisListComponent
  },
  {
    path: 'peliculas/add',
    component: PelisFormComponent
  },
  {
    path: 'peliculas/modificar/:id',
    component: PelisFormComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
