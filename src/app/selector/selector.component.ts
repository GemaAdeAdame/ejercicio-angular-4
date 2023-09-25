import { Component } from '@angular/core';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss']
})
export class SelectorComponent {
  imagenSeleccionada: string = '';

  seleccionarPersonaje(personaje: number) {
    // Cambia la URL de la imagen según el personaje seleccionado
    switch (personaje) {
      case 1:
        this.imagenSeleccionada = 'assets/images/Ada_Lovelace.jpg';
        break;
      case 2:
        this.imagenSeleccionada = 'assets/images/Hedy_Lamarr.jpg';
        break;
      case 3:
        this.imagenSeleccionada = 'assets/images/Margaret_Hamilton.jpg';
        break;
      default:
        this.imagenSeleccionada = '';
    }
  }
}
