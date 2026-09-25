import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  numero1: number = 0;
  numero2: number = 0;
  operacion: string = 'sumar';
  resultado: number | string = 0;
  historial: string[] = [];

  calcular() {
    switch (this.operacion) {
      case 'sumar':
        this.resultado = this.numero1 + this.numero2;
        break;
      case 'restar':
        this.resultado = this.numero1 - this.numero2;
        break;
      case 'multiplicar':
        this.resultado = this.numero1 * this.numero2;
        break;
      case 'dividir':
        if (this.numero2 === 0) {
          this.resultado = 'Error: no se puede dividir entre 0';
        } else {
          this.resultado = this.numero1 / this.numero2;
        }
        break;
    }

    this.historial.push(
      `${this.numero1} ${this.operacion} ${this.numero2} = ${this.resultado}`
    );
  }

  limpiarHistorial() {
    this.historial = [];
  }
}