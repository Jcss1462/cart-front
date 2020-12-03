import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PaymentMethod } from '../domain/payment-method';

@Injectable({
  providedIn: 'root'
})
export class PaymentMethodService {

  //coloco la ruta del servicio
  private url:string=environment.apiUrl+"api/paymentMethod/";

  private headers;

  //inyecto http
  constructor(public httpClient:HttpClient) { 
    this.headers=this.createTokenHeader();
  }

  //coloco el token como header
  createTokenHeader():HttpHeaders{
    //obtengo el token
    let token=localStorage.getItem('token');
    //mando el token con la key definida en el back
    let headers= new HttpHeaders({'Authorization':token});
    return headers;
  }


  public findAll():Observable<any>{
      return this.httpClient.get(this.url+'findAll',{headers:this.headers});
  }

  public findByEnable():Observable<any>{
    return this.httpClient.get(this.url+'findByEnable',{headers:this.headers});
  } 

  public findById(payId:string):Observable<any>{
    return this.httpClient.get(this.url+'findById/'+payId,{headers:this.headers});
  }

  public save(paymentMethod:PaymentMethod):Observable<any>{
    return this.httpClient.post(this.url+'save',paymentMethod,{headers:this.headers});
  }

  public update(paymentMethod:PaymentMethod):Observable<any>{
    return this.httpClient.put(this.url+'update',paymentMethod,{headers:this.headers});
  }

  public deletete(payId:string):Observable<any>{
    return this.httpClient.delete(this.url+'delete/'+payId,{headers:this.headers});
  }

}
