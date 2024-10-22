import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { ApplicationConfig } from '@angular/core';
import { environment } from './environments/environment.prod';
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));




  
  export const appConfig: ApplicationConfig = {
    providers: [
      provideFirebaseApp(() => initializeApp(( environment.firebase))),
      provideFirestore(() => getFirestore()),
      
    ],
    
  }  
////35:54 del video Integración de Firebase, Angular (última versión) y Ionic. Tutorial paso a paso. CRUD completo.