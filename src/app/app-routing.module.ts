import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { RetratoComponent } from './retrato/retrato.component';
import { ProductoComponent } from './producto/producto.component';







const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'retrato', component: RetratoComponent },
  { path: 'producto', component: ProductoComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
