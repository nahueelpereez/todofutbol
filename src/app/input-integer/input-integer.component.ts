import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Camiseta } from '../lista-camisetas/camiseta';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.scss'
})
export class InputIntegerComponent {

  @Input()
  cantidad!: number;

  @Input()
  max!: number;

  @Output()
  cantidadChange: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  maxReached: EventEmitter<string> = new EventEmitter<string>();

  upQuantity(): void{
    if(this.cantidad < this.max){
      this.cantidad++;
      this.cantidadChange.emit(this.cantidad);
    }
    else
      this.maxReached.emit("se alcanzo el max");
  }

  downQuantity(): void{
    if(this.cantidad > 0){
      this.cantidad--;
      this.cantidadChange.emit(this.cantidad);
    }
  }

  changeQuantity(event: any): void {
    console.log(event);
    this.cantidadChange.emit(this.cantidad);
  }
  
}
