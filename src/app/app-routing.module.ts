import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EstudianteComponent} from './estudiante/estudiante.component';
import{ HomeComponent} from './home/home.component';   
import { ContactenosComponent } from './contactenos/contactenos.component';  

const routes: Routes = [
  { path: 'estudiante', component: EstudianteComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contactenos', component: ContactenosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
