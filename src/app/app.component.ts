import { Component, inject } from '@angular/core';
import { ApiService } from './api/api.service';
import { v1 } from 'uuid';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  private readonly productsSvc = inject(ApiService)
  //basketball = this.basketball-v1.getallProducts() 
  //products$ = this.productsSvc.getallProducts()

  
  constructor() {}
}
