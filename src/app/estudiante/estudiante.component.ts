import { Component, OnInit } from '@angular/core';
import { Estudiante } from './estudiante';
import { EstudianteService } from './estudiante.service';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.scss']
})
export class EstudianteComponent implements OnInit {
  tareaR:number;
  quizR:number;
  examenR:number;
  proyectoR:number;
  exposicionR:number;
  tarea:number;
  quiz:number;
  examen:number;
  proyecto:number;
  exposicion:number;
  t:number;
  q:number;
  e:number;
  p:number;
  x:number;
  r:number;
  show_g : boolean = false;
  show_r : boolean = false;

  calcularNotasTarea(){
    this.t = this.tareaR/100*this.tarea;
    
    
}
calcularNotasQuiz(){
  this.q = this.quizR/100*this.quiz;
  
}
calcularNotasExamen(){
  this.e = this.examenR/100*this.examen;
}

calcularNotasProyecto(){
  this.p = this.proyectoR/100*this.proyecto;
}

calcularNotasExposicion(){
  this.x = this.exposicionR/100*this.exposicion;
}
calcularNota(){
  this.r = this.t+this.q+this.e+this.p+this.x;
  if(this.r<75){
    this.show_r = true;

  }else{
    this.show_g = true;

  }
}  




  public estudiantes: Estudiante[];
  public show_form = false;
  public show_n= false;
  public current_estudiante: Estudiante;
  constructor(private service: EstudianteService) {
   }

  ngOnInit() {
    this.estudiantes = this.service.all();
  	
  }
  
  edit(estudiante){
  	this.show_form = true;
  	this.current_estudiante = estudiante;
  }
  add(){
  	this.show_form = true;
  	this.current_estudiante = new Estudiante();
  }
  save(){
  	this.show_form = false;
  	if(this.current_estudiante.nuevo){
  		this.service.add(this.current_estudiante);
  	}
  }

  
  Ocultar(){
    
    this.show_form = false;

  }

  
  
  
  
}