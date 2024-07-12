import { Component } from '@angular/core';
import { CarritoCamisetaService } from '../carrito-camiseta.service';
import { Camiseta } from '../lista-camisetas/camiseta';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.scss'
})
export class CarritoComponent {

  listaCarrito$: Observable <Camiseta[]> | undefined;
  constructor (private carrito: CarritoCamisetaService){
    this.listaCarrito$ = carrito.listaCarrito.asObservable();
  }

}
