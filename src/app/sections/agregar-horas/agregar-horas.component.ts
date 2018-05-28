import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar-horas',
  templateUrl: './agregar-horas.component.html',
  styleUrls: ['./agregar-horas.component.css'],
})
export class AgregarHorasComponent implements OnInit {
  completed: boolean;
  postSuccess: boolean;

  constructor() {
  }

  ngOnInit() {
    this.completed = true;
    this.postSuccess = false;
  }
}
