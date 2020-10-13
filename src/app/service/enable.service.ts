import { Injectable } from '@angular/core';
import { Enable } from '../domain/enable';

@Injectable({
  providedIn: 'root'
})
export class EnableService {

  public enables:Enable[];
  
  constructor() { 
    //formo un array de objetos de tipo enable
    this.enables=[
      {id:'Y', name:'SI'},
      {id:'N', name:'NO'}
    ]
  }

  //creo un metodo de tipo enable
  public findAll():Enable[]{
    return this.enables;
  }

}
