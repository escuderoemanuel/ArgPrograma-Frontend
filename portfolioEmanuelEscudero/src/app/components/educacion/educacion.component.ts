import { Component } from '@angular/core';

interface Educacion {
  titulo: string;
  lugar: string;
  fecha: string;
  tecnologias: string;
}

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css'],
})
export class EducacionComponent {
  educacion: Educacion[] = [
    {
      titulo: 'Desarrollador FullStack Jr',
      lugar: 'Argentina Programa #YoProgramo',
      fecha: '2023',
      tecnologias:
        'HTML | CSS | BOOTSTRAP | TYPESCRIPT | ANGULAR | MYSQL | JAVA | SPRINGBOOT',
    },
    {
      titulo: 'Desarrollador FrontEnd ReactJs',
      lugar: 'CoderHouse',
      fecha: '2023',
      tecnologias: 'JAVASCRIPT | REACTJS | FIREBASE',
    },
    {
      titulo: 'Desarrollador JavaScript',
      lugar: 'CoderHouse',
      fecha: '2023',
      tecnologias: 'VANILLA JAVASCRIPT',
    },
    {
      titulo: 'Programación Inicial',
      lugar: 'Argentina Programa #SeProgramar',
      fecha: '2022',
      tecnologias: 'GOBSTONES | RUBY | JAVASCRIPT',
    },
    {
      titulo: 'Desarrollo Web',
      lugar: 'CoderHouse',
      fecha: '2022',
      tecnologias:
        'VSCODE | HTML5 | CSS3 | SASS | NPM | BOOTSTRAP | GIT | GITHUB | SEO',
    },
    {
      titulo: 'Programación con Python',
      lugar: 'Amicana',
      fecha: '2022',
      tecnologias: 'VSCODE | PYTHON INICIAL',
    },
    {
      titulo: 'Técnico Superior en Turismo',
      lugar: 'Escuela Internacional de Turismo "Islas Malvinas"',
      fecha: '2013',
      tecnologias: 'ADMINISTRACIÓN TURÍSTICA | GUÍA DE TURISMO',
    },
  ];
}
