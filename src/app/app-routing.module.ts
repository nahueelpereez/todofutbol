import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodofutbolComprasComponent } from './todofutbol-compras/todofutbol-compras.component';
import { TodofutbolContactoComponent } from './todofutbol-contacto/todofutbol-contacto.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'compra',
    pathMatch: 'full'
  },
  {
    path: 'compra',
    component: TodofutbolComprasComponent,
  },
  {
    path: 'contacto',
    component: TodofutbolContactoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
