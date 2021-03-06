import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../domain/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //inicializo el url a login
  private url:string=environment.apiUrl+'login'

  //inyecto el httpClient
  constructor(public httpClient:HttpClient, public angularFireAuth:AngularFireAuth) {
    this.angularFireAuth.authState.subscribe(user=>{
      if(user){
        localStorage.setItem('user',JSON.stringify(user));
      }else{
        localStorage.removeItem('user');
      }
    })
  }

  //loginBack
  public loginUser(user:User):Observable<any>{
    return this.httpClient.post(this.url,user);
  }

  public logedIn():boolean{
    return !!localStorage.getItem('usuario');
  }

  public logOut():void{
    localStorage.removeItem('usuario');
  }

  /////////////////////////////////////////////////////////////////
  //firebase
  //crea un usuario en firebase
  public createUser(email:string,password:string){
    return this.angularFireAuth.createUserWithEmailAndPassword(email,password);
  }

  //login firebase
  public loginFireBase(user:User){
    return this.angularFireAuth.signInWithEmailAndPassword(user.username,user.password);
  }

  public logOutFirebase(){
    localStorage.removeItem('usuario');
    localStorage.removeItem('usuarioInfo');
    localStorage.removeItem('token');
    return this.angularFireAuth.signOut();
  }

  public async sendEmailVerification(){
    await (await this.angularFireAuth.currentUser).sendEmailVerification();
  }

  public async updatePassword(newPassword: string){
    await (await this.angularFireAuth.currentUser).updatePassword(newPassword);;
  }

  

}
