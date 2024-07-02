import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-seccionprincipal',
  templateUrl: './seccionprincipal.component.html',
  styleUrls: ['./seccionprincipal.component.css']
})
export class SeccionprincipalComponent {

  datosDelFormulario:any;
  arrayDeCanciones:any[] = [];
  texto:String="";
  @ViewChild('miForm') vistaFormulario!:NgForm;

  public enviar(formulario:any){
    this.datosDelFormulario = formulario;
    this.arrayDeCanciones.push(this.datosDelFormulario);
    this.vistaFormulario.reset();
    this.texto="Canción añadida correctamente";
  }

}

