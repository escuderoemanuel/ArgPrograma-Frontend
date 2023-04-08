import { Component } from '@angular/core';
interface Skills {
  nombre: string;
  porcentaje: string;
}

@Component({
  selector: 'app-hard',
  templateUrl: './hard.component.html',
  styleUrls: ['./hard.component.css'],
})
export class HardComponent {
  skills: Skills[] = [
    {
      nombre: 'HTML',
      porcentaje: '90',
    },
    {
      nombre: 'CSS',
      porcentaje: '80',
    },
    {
      nombre: 'JAVASCRIPT',
      porcentaje: '68',
    },
    {
      nombre: 'REACT JS',
      porcentaje: '65',
    },
    {
      nombre: 'TYPESCRIPT',
      porcentaje: '60',
    },
    {
      nombre: 'ANGULAR',
      porcentaje: '60',
    },
    {
      nombre: 'MYSQL',
      porcentaje: '50',
    },
    {
      nombre: 'BOOTSTRAP',
      porcentaje: '80',
    },
    {
      nombre: 'SASS',
      porcentaje: '70',
    },
    {
      nombre: 'JAVA',
      porcentaje: '43',
    },
    {
      nombre: 'SPRINBOOT',
      porcentaje: '38',
    },
  ];
}
