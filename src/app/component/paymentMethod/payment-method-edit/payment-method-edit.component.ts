import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Enable } from 'src/app/domain/enable';
import { PaymentMethod } from 'src/app/domain/payment-method';
import { EnableService } from 'src/app/service/enable.service';
import { PaymentMethodService } from 'src/app/service/payment-method.service';

@Component({
  selector: 'app-payment-method-edit',
  templateUrl: './payment-method-edit.component.html',
  styleUrls: ['./payment-method-edit.component.css']
})
export class PaymentMethodEditComponent implements OnInit {

  public payId: string;
  public paymentMethod: PaymentMethod;
  public enables: Enable[];

  public showMsg: boolean = false;
  public messages: string[] = [""]

  constructor(public router: Router,
    public activedRoute: ActivatedRoute,
    public paymentMethodService: PaymentMethodService,
    public enableService: EnableService) { }

  ngOnInit(): void {

    
    //obtengo los parametros de la url
    let params = this.activedRoute.params['_value'];
    this.payId = params.payId
    console.log(this.payId);

    //traigo los enables
    this.findAllEnable();
    //obtengo la informacion del  paymentMethod que accedio
    this.findById();
  }

  //lleno mi arreglo de enables con los del servicio
  public findAllEnable(): void {
    this.enables = this.enableService.findAll();
  }

  public findById(): void {
    this.paymentMethodService.findById(this.payId).subscribe(data => {
      this.paymentMethod = data;
      console.table(this.paymentMethod);
    })
  }

  public update():void{
    this.messages=[""];
    this.paymentMethodService.update(this.paymentMethod).subscribe(ok=>{
      alert("El paymentMethod se actualizo con exito");
    },err=>{
      alert(err.error.error);
    });
  }

}
