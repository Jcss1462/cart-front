import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../domain/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //coloco la ruta del servicio
  private url: string = environment.apiUrl + "api/product/";

  private headers;

  //inyecto http
  constructor(public httpClient: HttpClient) {
    this.headers = this.createTokenHeader();
  }

  //coloco el token como header
  createTokenHeader(): HttpHeaders {
    //obtengo el token
    let token = localStorage.getItem('token');
    //mando el token con la key definida en el back
    let headers = new HttpHeaders({ 'Authorization': token });
    return headers;

  }

  public findAll(): Observable<any> {
    return this.httpClient.get(this.url + 'findAll', { headers: this.headers });
  }

  public findById(proId: string): Observable<any> {
    return this.httpClient.get(this.url + 'findById/' + proId, { headers: this.headers });
  }

  public save(product: Product): Observable<any> {
    return this.httpClient.post(this.url + 'save', product, { headers: this.headers });
  }

  public update(product: Product): Observable<any> {
    return this.httpClient.put(this.url + 'update', product, { headers: this.headers });
  }

  public deletete(proId: string): Observable<any> {
    return this.httpClient.delete(this.url + 'delete/' + proId, { headers: this.headers });
  }

  public findAllEnable(): Observable<any> {
    return this.httpClient.get(this.url + 'findAllEnable', { headers: this.headers });
  }

}
