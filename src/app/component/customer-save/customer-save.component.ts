import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/domain/customer';
import { Enable } from 'src/app/domain/enable';
import { CustomerService } from 'src/app/service/customer.service';
import { EnableService } from 'src/app/service/enable.service';

@Component({
  selector: 'app-customer-save',
  templateUrl: './customer-save.component.html',
  styleUrls: ['./customer-save.component.css']
})
export class CustomerSaveComponent implements OnInit {

  public customer:Customer;
  public enables:Enable[];

  public showMsg:boolean=false;
  public messages:string[]=[""];

  //inyecto el servicio de customer y el servicio local de enable
  constructor(public customerService:CustomerService,
              public enableService: EnableService) { }

  ngOnInit(): void {
    //al llamar este componente inicializo el customer vvacio, dejando enble en Y por defecto
    this.customer=new Customer("","","Y","","","");
    this.findAllEnable();
  }

  //lleno mi arreglo de enables con los del servicio
  public findAllEnable():void{
    this.enables=this.enableService.findAll();
  }

  //guardo cuando oprimo el boton
  public save():void{
    this.messages=[""];
    this.customerService.save(this.customer).subscribe(ok=>{
      //si todo sale bien activo los mensajes
      this.showMsg=true;
      this.messages[0]="El customer se grabo con exito";
    },err=>{
      //si algo sale mal activo los mensajes
      //el segundo error el del back
      this.showMsg=true;
      this.messages=err.error.error;
    });
  }

}
