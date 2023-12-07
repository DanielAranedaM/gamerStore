import { Injectable, inject } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/compat/auth'
import { getFirestore, setDoc, doc, getDoc, addDoc, collection } from '@angular/fire/firestore'
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { getStorage, uploadString, ref, getDownloadURL } from '@angular/fire/storage';
import { User } from '../models/user.mode';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
 
  auth = inject(AngularFireAuth);
  storage = inject(AngularFireStorage);

  //**Auteticación */

  //**Funcion Acceder */
  singIn(user: User){
    return signInWithEmailAndPassword(getAuth(), user.email, user.password)
  }
  
  //**Funcion crear usuario */
  singUp(user: User){
    return createUserWithEmailAndPassword(getAuth(), user.email, user.password)
  }

  
  //**Actualizar usuario */
  updateUser(displayName: string){
    return updateProfile(getAuth().currentUser, {displayName})
  }

  //Poner user para guardar los datos
  setUser(path:string, data:any){
    return setDoc(doc(getFirestore(), path), data);
  }

  //Obtener item
  async getItem(path:string){
    return (await (getDoc(doc(getFirestore(), path)))).data();
  }

  //Agregar cosas a la base de datos
  addItem(path:string, data:any){
    return addDoc(collection(getFirestore(), path), data);
  }


  //Almacenar imagen en el storage de firebase
  async subirImagen(path:string, data_url:string){
    return uploadString(ref(getStorage(), path), data_url, 'data_url').then(() => {
      return getDownloadURL(ref(getStorage(), path))
    })
  }
}
