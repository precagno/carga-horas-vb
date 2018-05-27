import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar-docente',
  templateUrl: './agregar-docente.component.html',
  styleUrls: ['./agregar-docente.component.css'],
})
export class AgregarDocenteComponent implements OnInit {
  completed: boolean;
  postSuccess: boolean;

  constructor() {
  }

  ngOnInit() {
    this.completed = true;
    this.postSuccess = false;
  }
}
