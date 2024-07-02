import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { SeccionprincipalComponent } from './seccionprincipal/seccionprincipal.component';
import { PiedepaginaComponent } from './piedepagina/piedepagina.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    SeccionprincipalComponent,
    PiedepaginaComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
