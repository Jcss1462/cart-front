import { Component, OnInit } from '@angular/core';
import { Enable } from 'src/app/domain/enable';
import { PaymentMethod } from 'src/app/domain/payment-method';
import { EnableService } from 'src/app/service/enable.service';
import { PaymentMethodService } from 'src/app/service/payment-method.service';

@Component({
  selector: 'app-payment-method-save',
  templateUrl: './payment-method-save.component.html',
  styleUrls: ['./payment-method-save.component.css']
})
export class PaymentMethodSaveComponent implements OnInit {

  public paymentMethod:PaymentMethod;
  public enables:Enable[];

  public showMsg:boolean=false;
  public messages:string[]=[""];

  //inyecto el servicio de paymentMethod y el servicio local de enable
  constructor(public paymentMthodService:PaymentMethodService,
    public enableService: EnableService) { }

  ngOnInit(): void {

    //al llamar este componente inicializo el paymentMethod vacio, dejando enble en Y por defecto
    this.paymentMethod=new PaymentMethod(null,"Y","");
    this.findAllEnable();
  }

  //lleno mi arreglo de enables con los del servicio
  public findAllEnable():void{
    this.enables=this.enableService.findAll();
  }

  //guardo cuando oprimo el boton
  public save():void{
    this.messages=[""];
    this.paymentMthodService.save(this.paymentMethod).subscribe(ok=>{
      //si todo sale bien activo los mensajes
      this.showMsg=true;
      this.messages[0]="El paymentMethod se grabo con exito con el payId= "+ok.payId;
    },err=>{
      //si algo sale mal activo los mensajes
      //el segundo error el del back
      this.showMsg=true;
      this.messages=err.error.error;
    });
  }

}
