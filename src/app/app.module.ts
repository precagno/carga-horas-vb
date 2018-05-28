import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { CargaHorasComponent } from './sections/carga-horas/carga-horas.component';
import { HeaderComponent } from './sections/header/header.component';
import { FooterComponent } from './sections/footer/footer.component';
import { AgregarDocenteComponent } from './sections/agregar-docente/agregar-docente.component';
import { AgregarHorasComponent } from './sections/agregar-horas/agregar-horas.component';
import { ListaDocentesComponent } from './sections/lista-docentes/lista-docentes.component';
import { ListaHorasComponent } from './sections/lista-horas/lista-horas.component';

@NgModule({
  declarations: [
    AppComponent,
    CargaHorasComponent,
    HeaderComponent,
    FooterComponent,
    AgregarDocenteComponent,
    AgregarHorasComponent,
    ListaDocentesComponent,
    ListaHorasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
