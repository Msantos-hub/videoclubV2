import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PelisListComponent } from './components/pelis-list/pelis-list.component';
import { PelisFormComponent} from './components/pelis-form/pelis-form.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/pelis',
    pathMatch:'full'
  },
  {
    path: 'pelis',
    component: PelisListComponent
  },
  {
    path: 'pelis/modificar',
    component: PelisFormComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
