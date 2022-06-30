import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
//ver si el usuario esta logueado
constructor(private afauth: AngularFireAuth) { }
readonly ISLOGGEDKEY = 'islogged';
public urlUsuariointentaacceder=";"

public changeLoginStatusSubjet = new Subject<boolean>();
public changeLoginStatus$= this.changeLoginStatusSubjet.asObservable();


  async register(email: string, password: string) {
    try {
      return await this.afauth.createUserWithEmailAndPassword(email, password);
    } catch (err) {
      console.log("error en login: ", err);
      return null;
    }
  }

  //login
  async login(email: string, password: string) {
    try {
      return await this.afauth.signInWithEmailAndPassword(email, password);
      localStorage.setItem(this.ISLOGGEDKEY,'true');
      this.changeLoginStatusSubjet.next(true);
    } catch (err) {
      console.log("error en login: ", err);
      return null;
    }
  }


  async loginWithGoogle(email: string, password: string) {
    try {
      return await this.afauth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    } catch (err) {
      console.log("error en login con google: ", err);
      return null;
    }
  }

  getUserLogged() {
    return this.afauth.authState;
  
  }

  //
  isLoggedIn(url: string){
  const isLogged = localStorage.getItem(this.ISLOGGEDKEY);
  if (!isLogged) {
  this.urlUsuariointentaacceder = url;
  return false;
  }
  return true;
  }
  //
 
  logout() {
    try {
      this.afauth.signOut();

      localStorage.removeItem(this.ISLOGGEDKEY);
      this.changeLoginStatusSubjet.next (false);
    } catch (error) {
      
    }
    

  }


}
