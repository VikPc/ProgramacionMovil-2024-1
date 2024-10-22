import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error404',
  templateUrl: './error404.page.html',
  styleUrls: ['./error404.page.scss'],
})
export class Error404Page implements OnInit {
  //router: any;

  constructor(private router: Router) { }

  ngOnInit() {
  }

principalTo(){
    this.router.navigate(['/principal']); // Redirige a la vista 'registro'
  }

}
