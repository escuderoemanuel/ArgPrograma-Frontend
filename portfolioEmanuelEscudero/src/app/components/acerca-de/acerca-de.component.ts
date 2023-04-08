import { Component } from '@angular/core';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css'],
})
export class AcercaDeComponent {
  acercaDe: { presentacion: string } = {
    presentacion:
      '👋 Hola! Soy Emanuel Escudero, FullStack Developer Jr. Además soy Técnico Superior en Turismo. Tengo experiencia laboral en diversos rubros tanto de forma independiente como en relación de dependencia y busco mi primer experiencia laboral IT. Soy muy responsable. Siempre busco incorporar nuevos conocimientos, me adapto fácilmente a los cambios y tengo un constante deseo de superación personal y profesional.',
  };
}
