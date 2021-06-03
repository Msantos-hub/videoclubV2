import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PelisListComponent } from './components/pelis-list/pelis-list.component';
import { PelisFormComponent} from './components/pelis-form/pelis-form.component';
import { PelisInfoComponent} from './components/pelis-info/pelis-info.component';


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
    path: 'peliculas/edit/:id',
    component: PelisFormComponent
  },
  {
    path: 'peliculas/view/:id',
    component: PelisInfoComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
