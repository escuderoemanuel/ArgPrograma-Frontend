import { Component } from '@angular/core';

interface Proyecto {
  img: string;
  title: string;
  type: string;
  tools: string;
  urlDemo: string;
  urlRepo: string;
}

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
})
export class ProyectosComponent {
  proyectos: Proyecto[] = [
    {
      img: '../../../../assets/portfolio/retroplace.jpg',
      title: 'RetroPlace Store',
      type: 'Aplicación Web Dinámica - Ecommerce',
      tools: 'HTML5 | CSS3 | BOOTSTRAP | JAVASCRIPT | REACTJS | FIREBASE',
      urlDemo: 'https://retro-place-store.vercel.app/',
      urlRepo: 'https://github.com/escuderoemanuel/RetroPlaceStore',
    },
    {
      img: '../../../../assets/portfolio/mahoarcaoltra.jpg',
      title: 'Maho Arca Oltra',
      type: 'Sitio Web Estático',
      tools: 'RESPONSIVE DESING | HTML5 | CSS3 | SASS | FLEXBOX',
      urlDemo: 'https://escuderoemanuel.github.io/MahoArcaOltra/',
      urlRepo: 'https://github.com/escuderoemanuel/MahoArcaOltra',
    },
    {
      img: '../../../../assets/portfolio/kprem.jpg',
      title: 'KPREM Arte Gráfico',
      type: 'Aplicación Web Dinámica - Ecommerce',
      tools: 'HTML5 | CSS3 | BOOTSTRAP | VANILLA JAVASCRIPT | TOASTIFY',
      urlDemo: 'https://escuderoemanuel.github.io/KPREM-ArteGrafico/',
      urlRepo: 'https://github.com/escuderoemanuel/KPREM-ArteGrafico',
    },
    {
      img: '../../../../assets/portfolio/edguitars2.jpg',
      title: 'ED Guitars',
      type: 'Sitio Web Estático',
      tools: 'MOBILE FIRST | HTML5 | CSS3 | SASS | BOOTSTRAP',
      urlDemo: 'https://escuderoemanuel.github.io/EDGuitars/',
      urlRepo: 'https://github.com/escuderoemanuel/EDGuitars',
    },
    {
      img: '../../../../assets/portfolio/florescastillo.jpg',
      title: 'F&C Asesoras Contables',
      type: 'Sitio Web Estático',
      tools: 'RESPONSIVE DESING | HTML5 | CSS3 | SASS | FLEXBOX | GRID',
      urlDemo: 'https://escuderoemanuel.github.io/FC-AsesorasContables/',
      urlRepo: 'https://github.com/escuderoemanuel/FC-AsesorasContables',
    },
  ];
}
