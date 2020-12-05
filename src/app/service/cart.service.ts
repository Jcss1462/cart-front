import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customer } from '../domain/customer';
import { NewProduct } from '../domain/newProduct';
import { PayCartData } from '../domain/payCartData';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  //coloco la ruta del servicio a partir  del api colocado en el archivo enviroment
  private url:string=environment.apiUrl+"api/cart/";

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

  
  public createCart(customer:Customer):Observable<any>{
    return this.httpClient.post(this.url+'createCart',customer,{headers:this.headers});
  }

  public getCurrentCart(email:string):Observable<any>{
    return this.httpClient.get(this.url+'currentCart/'+email,{headers:this.headers});
  }

  public getShopingCartById(cartId:string):Observable<any>{
    return this.httpClient.get(this.url+'findCartById/'+cartId,{headers:this.headers});
  }


  public getShopingProducts(cartId:string):Observable<any>{
    return this.httpClient.get(this.url+'findShopingProductsByCartId/'+cartId,{headers:this.headers});
  }

  public addProduct(newProduct:NewProduct):Observable<any>{
    return this.httpClient.post(this.url+'addProduct',newProduct,{headers:this.headers});
  }

  public removeProduct(cartId:Number,proId:String):Observable<any>{
    return this.httpClient.delete(this.url+'removeProduct/'+cartId+"/"+proId,{headers:this.headers});
  }

  public payCart(payCartData:PayCartData):Observable<any>{
    return this.httpClient.put(this.url+'payCart',payCartData,{headers:this.headers});
  }

  public historyCart(email:string):Observable<any>{
    return this.httpClient.get(this.url+'historyCart/'+email,{headers:this.headers});
  }

  public clearCart(cartId:Number):Observable<any>{
    return this.httpClient.delete(this.url+'clearCart/'+cartId,{headers:this.headers});
  }



}
