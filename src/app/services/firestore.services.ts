import { inject, Injectable } from "@angular/core";
import { collectionData, docData, Firestore } from "@angular/fire/firestore";
import { collection, deleteDoc, doc, DocumentReference, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { v4 as uuidv4 } from 'uuid';

import { Observable } from "rxjs";
import { AngularFirestore} from '@angular/fire/compat/firestore';




@Injectable({
    providedIn: 'root'
})

export class FirestoreService {
  
   private firestore: Firestore = inject(Firestore);
    firebaseService: any;
    authfirebase: any;

    constructor() {}

    getDocument<tipo>(enlace: string) {
        const document = doc(this.firestore, enlace) as DocumentReference<tipo, any>;
        return getDoc<tipo, any>(document)
    }
    
    
    getDocumentChanges<tipo>(enlace: string) {
        console.log('getDocumentChanges ->', enlace);
        const document = doc(this.firestore, enlace);
        return docData(document) as Observable<tipo>;
    }

    getCollectionChanges<tipo>(path: string){
        const itemCollection = collection(this.firestore, path);
        return collectionData(itemCollection) as Observable<tipo[]>;
    }

    createDocument(data: any, enlace: string) {
        const document = doc(this.firestore, enlace);
        return setDoc(document, data);
    }

    createDocumentID(data: any, enlace: string, idDoc: string,) {
    const document = doc(this.firestore, `${enlace}/${idDoc}`);   
        return setDoc(document, data);
    }

    //createDocumentID(data: any, enlace: string, idDoc: string) {
      //  const document = doc(this.firestore, `${enlace}/${idDoc}`);    //Home page.ts
            
        //    return setDoc(document, data);
        //}

    async updateDocumentID(data: any, enlace: string, idDoc: string) {
        const document = doc(this.firestore, `${enlace}/${idDoc}`);
        return updateDoc(document, data)
    }

    async updateDocument(data: any, enlace: string, idDoc: string) {
        const document = doc(this.firestore, `${enlace}/${idDoc}`);
        return updateDoc(document, data)
    }

    deleteDocumentID(enlace: string, idDoc: string) {
        const document = doc(this.firestore,`${enlace}/${idDoc}`);
        return deleteDoc(document)
    }

    deleteDocFromRef(ref: any) {
        return deleteDoc(ref)
    }

    createIdDoc() {
      return uuidv4();
    }

    async getUid(){
        const user = await this.authfirebase.currentUser;

        if (user) {
            return user.uid;

        } else{
            return null;
        }
        
    }    


    //getDoc<Perfil>(path: string, id: string){
      //  return this.firestore.collection(path).doc<Perfil>(id).valueChanges()

//    }



    
    





}



