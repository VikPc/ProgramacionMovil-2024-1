import { ApplicationConfig, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DeportesComponent } from 'src/app/componentes/deportes/deportes.component';
import { ApiService } from './api/api.service';





@NgModule({
  
  declarations: [AppComponent, DeportesComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, BrowserAnimationsModule,HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, provideFirebaseApp(() => initializeApp({"projectId":"match-sport-1221","appId":"1:445458898085:web:be29549c4dcad5bcb1c14c","storageBucket":"match-sport-1221.appspot.com","apiKey":"AIzaSyC5PgjDP3Txeq2bcVHBcpIze6JCV3jVYxE","authDomain":"match-sport-1221.firebaseapp.com","messagingSenderId":"445458898085","measurementId":"G-65PD4Z4EC4"})), provideAuth(() => getAuth()), provideAnalytics(() => getAnalytics()), ScreenTrackingService, UserTrackingService, provideFirestore(() => getFirestore())],
  bootstrap: [AppComponent],
  
})
export class AppModule {}


//environment
