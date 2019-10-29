import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EstudianteComponent} from './estudiante/estudiante.component';

const routes: Routes = [
	{ path: 'estudiante', component: EstudianteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
