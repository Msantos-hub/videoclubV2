import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {HomeComponent} from './home.component';
import {HomeRoutingModules} from './home-routing.modules';
import {NavbarComponent} from '../navbar/navbar.component';
import {FooterComponent} from '../footer/footer.component';


@NgModule({
  declarations: [
    HomeComponent, NavbarComponent, FooterComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule, HomeRoutingModules
  ]
})
export class HomeModule { }
