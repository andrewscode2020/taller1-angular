import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BIT Bank';
  cliente = {
    nombre: '',
    saldo: 0
  };
  ingreso = false;

  abrirCuenta() {
    if (this.cliente.nombre !== '' && this.cliente.saldo > 0) {
      return this.ingreso = true;
    } else if (this.cliente.nombre === '') {
      alert('Debes ingresar un nombre.');
    } else {
      alert('Debes ingresar un saldo mayor a cero.');
    }
  }

  consignar() {
    let consignarValor = parseInt(prompt('Ingrese valor a consignar:'))
    this.cliente.saldo += consignarValor
  }

  retirar() {
    let retirarValor = parseInt(prompt('Ingrese valor a consignar:'))
    this.cliente.saldo -= retirarValor
  }

  salir() {
    this.ingreso = false;
    this.cliente.nombre = '';
    this.cliente.saldo = 0;
  }
}
