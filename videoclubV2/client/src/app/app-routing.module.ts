import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PelisListComponent } from './components/pelis-list/pelis-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/pelis',
    pathMatch:'full'
  },
  {
    path: 'pelis',
    component: PelisListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
