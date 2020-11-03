import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customer } from '../domain/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  //coloco la ruta del servicio a partir  del api colocado en el archivo enviroment
  private url:string=environment.apiUrl+"api/customer/";

  //inyecto http
  constructor(public httpClient:HttpClient) {}

  //coloco el token como header
  createTokenHeader():HttpHeaders{
    //obtengo el token
    let token=localStorage.getItem('token');
    //mando el token con la key definida en el back
    let headers= new HttpHeaders({'Authorization':token});
    return headers;

  }

  public findAll():Observable<any>{
    let headers=this.createTokenHeader();
    return this.httpClient.get(this.url+'findAll',{headers:headers});
  }

  public findById(email:string):Observable<any>{
    let headers=this.createTokenHeader();
    return this.httpClient.get(this.url+'findById/'+email,{headers:headers});
  }

  public save(customer:Customer):Observable<any>{
    let headers=this.createTokenHeader();
    return this.httpClient.post(this.url+'save',customer,{headers:headers});
  }

  public update(customer:Customer):Observable<any>{
    let headers=this.createTokenHeader();
    return this.httpClient.put(this.url+'update',customer,{headers:headers});
  }

  public deletete(email:string):Observable<any>{
    let headers=this.createTokenHeader();
    return this.httpClient.delete(this.url+'delete/'+email,{headers:headers});
  }

}
