import { Component } from '@angular/core';
import { Camiseta } from './camiseta';

@Component({
  selector: 'app-lista-camisetas',
  templateUrl: './lista-camisetas.component.html',
  styleUrl: './lista-camisetas.component.scss'
})
export class ListaCamisetasComponent {
  camisetas: Camiseta[] = [
    {
      "nombre": "Argentina",
      "modelo": "Titular Copa America 2024",
      "precio": 79.999,
      "stock": 0,
      "imagen": "./img/argentina.jpeg",
      "oferta": false,
      "cantidad": 0,
    },
    {
      "nombre": "Brasil",
      "modelo": "Suplente Copa America 2024",
      "precio": 74.999,
      "stock": 12,
      "imagen": "./img/brasil.jpg",
      "oferta": false,
      "cantidad": 0,
    },
    {
      "nombre": "Colombia",
      "modelo": "Titular Copa America 2024",
      "precio": 69.999,
      "stock": 5,
      "imagen": "./img/colombia.jpeg",
      "oferta": false,
      "cantidad": 0,
    },
    {
      "nombre": "Uruguay",
      "modelo": "Suplente Copa America 2024",
      "precio": 64.999,
      "stock": 7,
      "imagen": "./img/uruguay.jpeg",
      "oferta": true,
      "cantidad": 0,
    }
  ];

  upQuantity(camiseta: Camiseta): void{
    if(camiseta.cantidad < camiseta.stock)
      camiseta.cantidad++;
  }

  downQuantity(camiseta: Camiseta): void{
    if(camiseta.cantidad > 0)
      camiseta.cantidad--;
  }

  changeQuantity(event: { target: any; }, camiseta: Camiseta): void {
    console.log(event);
  }
}
