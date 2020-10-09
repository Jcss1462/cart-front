import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentMethodService {

  //coloco la ruta del servicio
  private url:string="http://localhost:9090/api/paymentMethod/";

  //inyecto http
  constructor(public httpClient:HttpClient) { }

  public findAll():Observable<any>{
      return this.httpClient.get(this.url+'findAll');
  }

  public findById(payId:string):Observable<any>{
    return this.httpClient.get(this.url+'findById/'+payId);
  }

}
