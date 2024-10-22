import { Component, OnInit } from '@angular/core';
import { UserI } from '../common/models/users.models';
import { FirestoreService } from '../services/firestore.services';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-recerva',
  templateUrl: './recerva.page.html',
  styleUrls: ['./recerva.page.scss'],
})
export class RecervaPage implements OnInit {
casa() {
  this.router.navigate(['/principal'])

}
redirigir() {
  if (this.router.url !== 'loading'){
    
  }


}



  users: UserI [] = [];
  user: {name: '', email: ''}
  
  newUser: UserI;
  cargando: boolean = false;
  firebaseService: any;
  //router: any;
  //firestoreService: any;

  

  constructor(private firestoreService: FirestoreService, private router: Router ) {
    this.loadusers();
    this.initUser();
    //this.getuser();
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
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

  //constructor() { }

  //ngOnInit() { 
    //this.router.navigate(['/muestra']);
  //}

  

}
}
