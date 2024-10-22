import { Component, AfterViewInit, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { AnimationController, IonCard } from '@ionic/angular';
import { Router } from '@angular/router';
import type { Animation } from '@ionic/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements AfterViewInit {

  @ViewChildren(IonCard, { read: ElementRef }) cardElements!: QueryList<ElementRef<HTMLIonCardElement>>;
  private animation!: Animation;

  constructor(
    private animationCtrl: AnimationController,
    private router: Router // Añadido para la navegación
  ) { }

  ngAfterViewInit() {
    if (this.cardElements.length >= 1) {
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

      this.animation = this.animationCtrl
        .create()
        .duration(4000) // Duración total de la animación
        .iterations(Infinity)
        .addAnimation([cardB]);

      this.play();

      // Redirige después de que termine una iteración de la animación
      setTimeout(() => {
        this.router.navigate(['/principal']); // Redirige a la página principal
      }, 2000); // tiempo de la duracion
    }
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
}
