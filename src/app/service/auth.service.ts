import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
  constructor(public httpClient:HttpClient) {}

  public loginUser(user:User):Observable<any>{
    return this.httpClient.post(this.url,user);
  }

  public logedIn():boolean{
    return !!localStorage.getItem('usuario');
  }

  public logOut():void{
    localStorage.removeItem('usuario');
  }

}
