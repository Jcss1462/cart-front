import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/domain/customer';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {



  public titulo:string="Lista customer";

  //creo un arreglo de curtomer
  public customers:Customer[]

  public showMsg: boolean = false;
  public messages: string[] = [""];

  //inyecto el servicio
  constructor(public customerService: CustomerService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll():void{
    //hago la consulta y guardo los resultados
    //envio una variable para los datos y otra para los errores
    this.customerService.findAll().subscribe(data=>{
      this.customers=data;
    },error=>{
      //si hay error, lo imprimo en la consola
      console.error(error)
    });
  }

  public delete(email:string):void{
    this.messages=[""];
    this.customerService.deletete(email).subscribe(ok=>{
      //si todo sale bien activo los mensajes
      this.showMsg=true;
      this.messages[0]="El customer se borro con exito";

      //si fue exitoso actualizo la lista
      this.findAll();
      
    },err=>{
      //si algo sale mal activo los mensajes
      //el segundo error el del back
      this.showMsg=true;
      this.messages=err.error.error;
    });
  }


}
