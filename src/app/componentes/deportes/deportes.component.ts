import { Component } from '@angular/core';
//import { ApiService } from 'src/app/servicios/api.service';
import { ApiService } from 'src/app/api/api.service';
@Component({
  selector: 'app-deportes',
  templateUrl: './deportes.component.html',
  styleUrls: ['./deportes.component.scss']
})
export class DeportesComponent {
  public sportsData: any;

  constructor(private apiService: ApiService) {}

  //getRandomInfo() {
    //console.log('Fetching data...');
   // this.apiService.getRandomData().subscribe(
     // (data) => {
       // this.sportsData = data;
      //  console.log('Datos recibidos:', data);
      //},
     // (error) => {
       // console.error('Error fetching data:', error);
     // }
    //);
 // }
}

