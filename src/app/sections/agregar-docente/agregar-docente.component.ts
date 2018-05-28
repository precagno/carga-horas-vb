import { Component, OnInit } from '@angular/core';
import { Docente } from '../../models/docente';
import { Asignatura, ASIGNATURAS } from '../../models/asignatura';

@Component({
  selector: 'app-agregar-docente',
  templateUrl: './agregar-docente.component.html',
  styleUrls: ['./agregar-docente.component.css'],
})
export class AgregarDocenteComponent implements OnInit {
  completed: boolean;
  postSuccess: boolean;
  docente: Docente;
  asignaturas: Asignatura[];

  constructor() {
  }

  ngOnInit() {
    this.completed = true;
    this.postSuccess = false;
    this.docente = new Docente();
    this.asignaturas = ASIGNATURAS;
  }

  submitForm(event) {
    console.log(this.docente);
  }
}
