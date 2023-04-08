import { Component } from '@angular/core';

@Component({
  selector: 'app-banner-dos',
  templateUrl: './banner-dos.component.html',
  styleUrls: ['./banner-dos.component.css'],
})
export class BannerDosComponent {
  persona: {
    nombre: string;
    apellido: string;
    titulo: string;
    imgPerfil: string;
  } = {
    nombre: 'Emanuel',
    apellido: 'Escudero',
    titulo: 'FullStack Developer Jr.',
    imgPerfil: '../../assets/profile/logoFoto2023.png',
  };

  public nombreApellido(): string {
    return `${this.persona.nombre} ${this.persona.apellido}`;
  }
}
