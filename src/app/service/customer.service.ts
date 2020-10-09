import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  //coloco la ruta del servicio
  private url:string="http://localhost:9090/api/customer/";

  //inyecto http
  constructor(public httpClient:HttpClient) { }

  public findAll():Observable<any>{
      return this.httpClient.get(this.url+'findAll');
  }

  public findById(email:string):Observable<any>{
    return this.httpClient.get(this.url+'findById/'+email);
  }

}
