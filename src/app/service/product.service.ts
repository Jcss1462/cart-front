import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../domain/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  //coloco la ruta del servicio
  private url:string=environment.apiUrl+"api/product/";

  //inyecto http
  constructor(public httpClient:HttpClient) { }

  public findAll():Observable<any>{
      return this.httpClient.get(this.url+'findAll');
  }

  public findById(proId:string):Observable<any>{
    return this.httpClient.get(this.url+'findById/'+proId);
  }

  public save(product:Product):Observable<any>{
    return this.httpClient.post(this.url+'save',product);
  }

  public update(product:Product):Observable<any>{
    return this.httpClient.put(this.url+'update',product);
  }

  public deletete(proId:string):Observable<any>{
    return this.httpClient.delete(this.url+'delete/'+proId);
  }

}
