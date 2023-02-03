import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoLibroComponent } from './component/listado-libro/listado-libro.component';
import { NewLibroComponent } from './component/new-libro/new-libro.component';
import { LibreriaComponent } from './component/libreria/libreria.component';




@NgModule({
  declarations: [
    AppComponent,
    ListadoLibroComponent,
    NewLibroComponent,
    LibreriaComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
