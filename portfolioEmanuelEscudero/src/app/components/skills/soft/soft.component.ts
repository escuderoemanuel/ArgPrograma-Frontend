import { Component } from '@angular/core';

interface Skills {
  nombre: string;
  porcentaje: string;
}

@Component({
  selector: 'app-soft',
  templateUrl: './soft.component.html',
  styleUrls: ['./soft.component.css'],
})
export class SoftComponent {
  skills: Skills[] = [
    {
      nombre: 'COLABORACIÓN Y TRABAJO EN EQUIPO',
      porcentaje: '78',
    },
    {
      nombre: 'COMPORTAMIENTO ÉTICO Y PROFESIONAL',
      porcentaje: '87',
    },
    {
      nombre: 'ADAPTABILIDAD Y FLEXIBILIDAD',
      porcentaje: '89',
    },
    {
      nombre: 'GESTIÓN DE TIEMPO Y TAREAS',
      porcentaje: '81',
    },
  ];
}
