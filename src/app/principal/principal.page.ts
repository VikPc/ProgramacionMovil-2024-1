import { Component, OnInit, ElementRef, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import type { QueryList } from '@angular/core';
import type { Animation } from '@ionic/angular';
import { AnimationController, IonCard } from '@ionic/angular';
import { LoginPage } from '../login/login.page';  
//import { DeportesComponent } from '../componentes/deportes/deportes.component';
import { DeportesComponent } from 'src/app/componentes/deportes/deportes.component';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
  
})
export class PrincipalPage {
  @ViewChildren(DeportesComponent) deportesComponent!: DeportesComponent;
  @ViewChildren(IonCard, { read: ElementRef }) cardElements!: QueryList<ElementRef<HTMLIonCardElement>>;

  private animation!: Animation;
  username: string;
  //deportesComponent: any;
  //router: any;
  
  constructor(private animationCtrl: AnimationController, private route:ActivatedRoute, private router: Router) {
    //this.username = this.route.snapshot.paramMap.get('username') ;

    this.username  = 'víctor';
  }
  //onGetRandomInfo(){
    //this.deportesComponent.getRandomInfo();
  //}
  ngOnInit() {
    
    
  }

  ngAfterViewInit() {
    if (this.cardElements.length >= 1) {
    const cardA = this.animationCtrl
      .create()
      .addElement(this.cardElements.get(0)!.nativeElement)
      .keyframes([
        { offset: 0, transform: 'scale(1) rotate(0)' },
        { offset: 0.5, transform: 'scale(1.5) rotate(45deg)' },
        { offset: 1, transform: 'scale(1) rotate(0) ' },
      ]);

    const cardB = this.animationCtrl
      .create()
      .addElement(this.cardElements.get(0)!.nativeElement)
      .keyframes([
        { offset: 0, transform: 'scale(1)', opacity: '1' },
        { offset: 0.2, transform: 'scale(1.5)', opacity: '0.8' },
        { offset: 0.4, transform: 'scale(2.0)', opacity: '0.6' },
        { offset: 0.6, transform: 'scale(2.5)', opacity: '0.5' },
        { offset: 0.8, transform: 'scale(3.0)', opacity: '0.4' },
        { offset: 1.0, transform: 'scale(3.5)', opacity: '0.4' },
      ]);

    const cardC = this.animationCtrl
      .create()
      .addElement(this.cardElements.get(2)!.nativeElement)
      .duration(5000)
      .keyframes([
        { offset: 0, transform: 'scale(1)', opacity: '0.5' },
        { offset: 0.5, transform: 'scale(0.5)', opacity: '1' },
        { offset: 1, transform: 'scale(1)', opacity: '0.5' },
      ]);

    this.animation = this.animationCtrl
      .create()
      .duration(4000)
      .iterations(Infinity)
      .addAnimation([cardB]);
  }
  console.log(this.deportesComponent);
  }

  play() {
    this.animation.play();
  }

  pause() {
    this.animation.pause();
  }

  stop() {
    this.animation.stop();
  }


  login(){
    localStorage.setItem('token', 'your-auth-token');
    this.router.navigate(['/home'])
    }

    navigateTo(){
      this.router.navigate(['/recerva']);

    }

    navigateToMuestra(){
      this.router.navigate(['/muestra']);
    }
    
}