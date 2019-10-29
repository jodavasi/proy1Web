import { Injectable } from '@angular/core';
import { Estudiante } from './estudiante';


@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  public estudiantes: Estudiante[];
  constructor() {
    this.estudiantes = [];
  	let e = new Estudiante();
  	e.id = '207610854';
  	e.nombre = 'Daniel';
    e.apellido = 'Vargas';
    e.nota = 0;
  	this.estudiantes.push(e);
  }

  all() {
  	return this.estudiantes;
  }

  add(estudiante: Estudiante) {
  	this.estudiantes.push(estudiante);
  }


  
  
}