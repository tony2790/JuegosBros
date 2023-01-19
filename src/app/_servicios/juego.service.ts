import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Juegos } from '../_modelo/Juegos';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})

export class JuegoService {

  private url:string=`${environment.HOST}/juegos`;

  listar():Observable<Juegos[]>{
    return this.http.get<Juegos[]>(this.url)

  }

  listarPortipojuego(tipo:string):Observable<Juegos[]>{
    return this.http.get<Juegos[]>(this.url+'/tipo/'+tipo)

  }

  listarPorFiltro(tipo:string, tema:string):Observable<Juegos[]>{
    return this.http.get<Juegos[]>(this.url+'/tipo/'+tipo+'/'+tema)

  }

  buscarJuego(juego: Juegos): Observable<Juegos> {
    return this.http.post<Juegos>(this.url+'/buscar', juego, httpOptions)
  }

  muestraMensaje(mensaje:string){
    
    alert(mensaje);

  }




  constructor(private http:HttpClient) { }
}
