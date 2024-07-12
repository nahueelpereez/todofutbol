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
    },
    {
      "nombre": "Brasil",
      "modelo": "Suplente Copa America 2024",
      "precio": 74.999,
      "stock": 120,
      "imagen": "./img/brasil.jpg",
      "oferta": false,
    },
    {
      "nombre": "Colombia",
      "modelo": "Titular Copa America 2024",
      "precio": 69.999,
      "stock": 80,
      "imagen": "./img/colombia.jpeg",
      "oferta": false,
    },
    {
      "nombre": "Uruguay",
      "modelo": "Suplente Copa America 2024",
      "precio": 64.999,
      "stock": 110,
      "imagen": "./img/uruguay.jpeg",
      "oferta": true,
    }
  ]
}
