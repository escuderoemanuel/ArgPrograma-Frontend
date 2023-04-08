import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { BannerUnoComponent } from './components/header/banner-uno/banner-uno.component';
import { BannerDosComponent } from './components/header/banner-dos/banner-dos.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { SkillsComponent } from './components/skills/skills.component';
import { SoftComponent } from './components/skills/soft/soft.component';
import { HardComponent } from './components/skills/hard/hard.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcercaDeComponent,
    BannerUnoComponent,
    BannerDosComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    SoftComponent,
    HardComponent,
    ProyectosComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
