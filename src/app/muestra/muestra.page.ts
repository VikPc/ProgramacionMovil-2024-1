import { Component, OnInit } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { ApiService } from '../api/api.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-muestra',
  templateUrl: './muestra.page.html',
  styleUrls: ['./muestra.page.scss'],
})
export class MuestraPage implements OnInit {
principal() {
  this.router.navigate(['/principal']); // Redirige a la vista 'registro'
}
  nombreBuscar: any = {first: '', last: ''};
  ubicacionBuscar: any = {street:'', city:'', country:''};
  //pokemonElegido: any;
  buscarPersona: any;
  //router: any;


  constructor(private apiService: ApiService, private router: Router) {}
  
  //buscar(): void{
    //console.log('esta buscando:',this.nombreBuscar);
   // this.apiService.getPokemonXidNombre(this.nombreBuscar).subscribe(
     // response => {
       // this.pokemonElegido = response;
       // console.log(this.pokemonElegido);
     // }
    //);
  //}

  encontrar(): void{
    console.log('Estas buscando una Persona', this.buscarPersona);
    
    this.apiService.getPersonaNombre(this.buscarPersona).subscribe(
      response => {
        if (response.results && response.results.length > 0){
        const persona = response.results[0];
        const nombre = persona.name || {};
        const ubicacion = persona.location || {};


        console.log('Nombre:', nombre);
        console.log('Ubicación:', ubicacion);


        this.nombreBuscar = {
          first: nombre.first || 'Nombre no disponible',
          last: nombre.last || 'Apellido no disponible',
        };

        this.ubicacionBuscar = {
          street: ubicacion.street || 'Calle no disponible',
          city: ubicacion.city || 'Ciudad no disponible',
          state: ubicacion.state || 'Estado no disponible',
          country: ubicacion.country || 'País no disponible'

        };

        this.router.navigate(['/muestra'], {
          state: { persona: this.nombreBuscar, ubicacion: this.ubicacionBuscar }
        });

        

        } else {
          console.log('No se encontraron resultados');
          this.nombreBuscar = { first: '', last: '' };
          this.ubicacionBuscar = { street: '', city: '', state: '', country: '' };
        }
    
      },
      error => {
        console.error('Error al buscar la persona', error);
      } 
    );

  }

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras.state) {
      this.nombreBuscar = navigation.extras.state['persona'];
      this.ubicacionBuscar = navigation.extras.state['ubicacion'];
      console.log('Nombre:', this.nombreBuscar);
      console.log('Ubicación:', this.ubicacionBuscar);
    } else {
      console.log('No se pasaron datos al navegar a muestra');
      this.nombreBuscar = { first: '', last: '' }; // Opcional: inicializar en caso de no haber datos
      this.ubicacionBuscar = { street: '', city: '', state: '', country: '' }; // Opcional
    }
  }

   
    
  
}
