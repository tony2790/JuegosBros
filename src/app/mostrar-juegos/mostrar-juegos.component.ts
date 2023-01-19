import { Component, OnInit } from '@angular/core';
import { Juegos } from '../_modelo/Juegos';
import { JuegoService } from '../_servicios/juego.service';

@Component({
  selector: 'app-mostrar-juegos',
  templateUrl: './mostrar-juegos.component.html',
  styleUrls: ['./mostrar-juegos.component.css']
})
export class MostrarJuegosComponent implements OnInit{

  juegoss:Juegos[]=[]

  constructor(private sJuego:JuegoService){}

  ngOnInit(): void {
    
    this.sJuego.listar()
    .subscribe(datos =>{
      this.juegoss=datos;
    })


}
}
