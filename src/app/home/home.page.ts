import { Component } from '@angular/core';
import { FirestoreService } from '../services/firestore.services';
import { UserI } from '../common/models/users.models';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {


 
  users: UserI [] = [];
  
  newUser: UserI;
  cargando: boolean = false;
  //firestoreService: any;

  

  constructor(private firestoreService: FirestoreService ) {
    this.loadusers();
    this.initUser();
    //this.getuser();
  }

    loadusers() {
    this.firestoreService.getCollectionChanges<UserI>('Usuarios').subscribe( data => {
      if (data) {
        this.users = data
      }
      
    })

    //const user = {
      //nombre: 'Victor',
     // edad: 15
    //}

    //const user1 = {
      //nombre: 'jorge',
      //edad: 18
   // }

    //this.users.push(user);
    //this.users.push(user1);
  }
  
  initUser() {
    this.newUser = {
      nombre: null,
      edad: null,
      //correo: null,
      id: this.firestoreService.createIdDoc(),
    }
  }
  async save() {
    this.cargando = true;
    await this.firestoreService.createDocumentID(this.newUser, 'Usuarios', this.newUser.id)
    this.cargando = false;
  }

  edit(user: UserI) {
    this.newUser = user
  }
  delete(user: UserI) {
    this.cargando = true;
    this.firestoreService.deleteDocumentID('Usuarios', user.id);
    this.cargando = false;
  }


  getuser(){
    const uid = '';
    this.firestoreService.getDocumentChanges('Usuarios/' + uid).subscribe( data =>{
      console.log('getuser ->', data);
    })

    //this.firestoreService.getDocument('Usuarios/' + uid).then( data => {

    //})
  }








}

//animacion

//-----------Animacion----------------------

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';







