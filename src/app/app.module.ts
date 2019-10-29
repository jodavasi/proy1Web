import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { EstudianteComponent } from './estudiante/estudiante.component';
import{EstudianteService} from './estudiante/estudiante.service';
import { HomeComponent } from './home/home.component';
import { ContactenosComponent } from './contactenos/contactenos.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    EstudianteComponent,
    HomeComponent,
    ContactenosComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [EstudianteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
