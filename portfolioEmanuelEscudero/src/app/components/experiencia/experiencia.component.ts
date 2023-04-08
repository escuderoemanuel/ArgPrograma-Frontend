import { Component } from '@angular/core';

//La interface debe ser declarada aquí!
interface Experiencia {
  icon: string;
  fechaDesde: string;
  fechaHasta: string;
  puesto: string;
  lugar: string;
  tareas: string[];
}

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css'],
})
export class ExperienciaComponent {
  experiencias: Experiencia[] = [
    {
      icon: 'iconExperiencia fa-icon fa-solid fa-shield-halved me-4',
      fechaDesde: 'Abril 2016',
      fechaHasta: 'Actualidad',
      puesto: 'Recepción - Vigilancia',
      lugar: 'Consorcio Torre-Pulisich',
      tareas: [
        'Control de ingresos/egresos del edificio',
        'Vigilancia permanente de cámaras de seguridad',
        'Recepción de paquetería y correspondencia',
      ],
    },
    {
      icon: 'iconExperiencia fa-icon fa-solid fa-store me-4',
      fechaDesde: 'Noviembre 2016',
      fechaHasta: ' Junio 2022',
      puesto: 'Comerciante Autónomo',
      lugar: 'KPREM Arte Gráfico',
      tareas: [
        'Atención al público',
        'Administración general del comercio',
        'Diseño, operario, ventas, etc',
      ],
    },
    {
      icon: 'iconExperiencia fa-icon fa-solid fa-circle-info me-4',
      fechaDesde: 'Mayo 2013',
      fechaHasta: 'Diciembre 2015',
      puesto: 'Informador Turístico',
      lugar: 'Aeropuerto Internacional Francisco Gabrielli',
      tareas: [
        'Atenciónj y asistencia al turista en general',
        'Informes sobre atracticos, proveedores de servicios, etc',
        'Diseño y organización de itinerarios',
      ],
    },
  ];
}
