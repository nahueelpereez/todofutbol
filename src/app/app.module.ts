import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaCamisetasComponent } from './lista-camisetas/lista-camisetas.component';

import { FormsModule } from '@angular/forms';
import { TodofutbolContactoComponent } from './todofutbol-contacto/todofutbol-contacto.component';
import { TodofutbolComprasComponent } from './todofutbol-compras/todofutbol-compras.component';
import { CarritoComponent } from './carrito/carrito.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaCamisetasComponent,
    TodofutbolContactoComponent,
    TodofutbolComprasComponent,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
