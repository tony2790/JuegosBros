import { Component } from '@angular/core';
import { Juegos } from '../_modelo/Juegos';
import { JuegoService } from '../_servicios/juego.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cuestionario',
  templateUrl: './cuestionario.component.html',
  styleUrls: ['./cuestionario.component.css']
})
export class CuestionarioComponent {
    public userForm:FormGroup; // variable is created of type FormGroup is created
    tipo: string = ""; // Variable is created to show the input value below the button
    juegosFiltro:Juegos[]=[]
   
    listarPorJuego(){
      alert(this.userForm.get('tipo')?.value);
      this.sJuego.listarPortipojuego(this.userForm.get('tipo')?.value)
      .subscribe(datos =>{
        this.juegosFiltro=datos;
      })
    
    }

    listarPorFiltro(){
      
      var juego = Object.create(Juegos);
      juego.tipojuego = this.userForm.get('tipo')?.value;
      juego.tematica = this.userForm.get('tema')?.value;

      this.sJuego.buscarJuego(juego).s
      .subscribe(datos =>{
        this.juegosFiltro=datos;
      })
    
    }

  constructor(private sJuego:JuegoService, private fb: FormBuilder) {
    // Form element defined below
    this.userForm = this.fb.group({
      tipo: '',
      tema:''
    });}

    setValue() {
      this.tipo=this.userForm.get('tipo')?.value; // input value retrieved
    }
}
