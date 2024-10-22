import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 // private urlEndPoint: string = 'https://pokeapi.co/api/v2/'
  private urlPeople: string = 'https://randomuser.me/api/'
///https://randomuser.me/api/
  constructor(private http: HttpClient){}

  //getPokemonXidNombre(nombre: string): Observable<any>{
    //return this.http.get<any>( `${this.urlEndPoint}/pokemon/${nombre}` );

  //}

  getPersonaNombre(nombre: string): Observable<any>{
    return this.http.get<any>(`${this.urlPeople}`);
  }

  
}

 

  

  //getRandomData(): Observable<any> {
    //return this.http.get<any>('https://api-sports.io/documentation/basketball/basketball-v1.yaml'); // Realiza la petición a la API
  //}

