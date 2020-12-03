import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentMethod } from 'src/app/domain/payment-method';
import { ShopingProduct } from 'src/app/domain/shopingProduct';
import { CartService } from 'src/app/service/cart.service';
import { PaymentMethodService } from 'src/app/service/payment-method.service';

@Component({
  selector: 'app-shoping-product-info',
  templateUrl: './shoping-product-info.component.html',
  styleUrls: ['./shoping-product-info.component.css']
})
export class ShopingProductInfoComponent implements OnInit {

  public shopingProducts: ShopingProduct[];
  public paymentMethodList: PaymentMethod[];
  public carId:string;

  constructor(public router: Router,
    public activedRoute: ActivatedRoute,
    public cartService: CartService,
    public paymentMethod: PaymentMethodService
    ) { }

  ngOnInit(): void {
    //obtengo los parametros de la url
    let params = this.activedRoute.params['_value'];
    this.carId = params.carId;
    console.log(this.carId);

    //obtengo los shoping productos del shoping cart
    this.getSopingProducts();

    //obtengo los peyment method enables
    this.getPaymentMethodnables();
  }

  public getSopingProducts(){
    this.cartService.getShopingProducts(this.carId).subscribe(ok=>{
      this.shopingProducts=ok;
    },err=>{
      alert("error")
    });
  }

  public getPaymentMethodnables(){
    this.paymentMethod.findByEnable().subscribe(ok=>{
      this.paymentMethodList=ok;
    },err=>{
      alert("error")
    });
  }

}
