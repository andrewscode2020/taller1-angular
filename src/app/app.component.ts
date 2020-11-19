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

  abrirCuenta() {
    console.log(this.cliente.nombre);
    console.log(this.cliente.saldo);
    if (this.cliente.nombre !== '' && this.cliente.saldo >= 0) {
      let ingreso = true;
    } else if (this.cliente.nombre === '') {
      alert('Debes ingresar un nombre.');
    } else {
      alert('Debes ingresar un saldo mayor o igual a cero.');
    }
  }

}
