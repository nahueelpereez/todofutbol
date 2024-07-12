import { Injectable } from '@angular/core';
import { Camiseta } from './lista-camisetas/camiseta';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoCamisetaService {

  constructor() { }

  private _listaCarrito: Camiseta [] = [];

  listaCarrito: BehaviorSubject<Camiseta[]> = new BehaviorSubject(this._listaCarrito);

  addToCarrito(camiseta: Camiseta){
    let item: Camiseta | undefined = this._listaCarrito.find((v1) => v1.nombre == camiseta.nombre)
    if(!item){
      this._listaCarrito.push({ ... camiseta});
    } else {
      item.cantidad += camiseta.cantidad;
    }

    console.log(this._listaCarrito);
    this.listaCarrito.next(this._listaCarrito); //Equivalente al emitt de eventos

  }

}
