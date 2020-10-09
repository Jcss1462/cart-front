import { Component, OnInit } from '@angular/core';
import { PaymentMethod } from 'src/app/domain/payment-method';
import { PaymentMethodService } from 'src/app/service/payment-method.service';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.css']
})
export class PaymentMethodComponent implements OnInit {

  public titulo:string="Lista paymentMethod";

  //creo un arreglo de curtomer
  public paymentMethods:PaymentMethod[]

  //inyecto el servicio
  constructor(public paymentMethodService: PaymentMethodService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll():void{
    //hago la consulta y guardo los resultados
    //envio una variable para los datos y otra para los errores
    this.paymentMethodService.findAll().subscribe(data=>{
      this.paymentMethods=data;
    },error=>{
      //si hay error, lo imprimo en la consola
      console.error(error)
    });
  }

}
