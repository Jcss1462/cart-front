import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/domain/customer';
import { Enable } from 'src/app/domain/enable';
import { CustomerService } from 'src/app/service/customer.service';
import { EnableService } from 'src/app/service/enable.service';
@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  public email: string;
  public customer: Customer;
  public enables: Enable[];

  public showMsg: boolean = false;
  public messages: string[] = [""];

  constructor(public router: Router,
    public activedRoute: ActivatedRoute,
    public customerService: CustomerService,
    public enableService: EnableService) { }

  ngOnInit(): void {
    //obtengo los parametros de la url
    let params = this.activedRoute.params['_value'];
    this.email = params.email
    console.log(this.email);

    //traigo los enables
    this.findAllEnable();
    //obtengo la informacion del  customer que accedio
    this.findById();
  }

  //lleno mi arreglo de enables con los del servicio
  public findAllEnable(): void {
    this.enables = this.enableService.findAll();
  }

  public findById(): void {
    this.customerService.findById(this.email).subscribe(data => {
      this.customer = data;
      console.table(this.customer);
    })
  }

  public update():void{
    this.messages=[""];
    this.customerService.update(this.customer).subscribe(ok=>{
      //si todo sale bien activo los mensajes
      this.showMsg=true;
      this.messages[0]="El customer se actualizo con exito";
    },err=>{
      //si algo sale mal activo los mensajes
      //el segundo error el del back
      this.showMsg=true;
      this.messages=err.error.error;
    });
  }

  public delete():void{
    this.messages=[""];
    this.customerService.deletete(this.customer.email).subscribe(ok=>{
      //si todo sale bien activo los mensajes
      this.showMsg=true;
      this.messages[0]="El customer se borro con exito";
    },err=>{
      //si algo sale mal activo los mensajes
      //el segundo error el del back
      this.showMsg=true;
      this.messages=err.error.error;
    });
  }

}
