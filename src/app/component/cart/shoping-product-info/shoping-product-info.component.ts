import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PayCartData } from 'src/app/domain/payCartData';
import { PaymentMethod } from 'src/app/domain/payment-method';
import { ShopingCart } from 'src/app/domain/shopingCart';
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
  public shopingCartInfo:ShopingCart;

  public payCartData:PayCartData;


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

    //obtengo la informacion del shoping cart
    this.cartService.getShopingCartById(this.carId).subscribe(ok=>{
      this.shopingCartInfo=ok;
    },err=>{
      alert(err.error.error)
    });


    //obtengo los shoping productos del shoping cart
    this.getSopingProducts();

    //obtengo los peyment method enables
    this.getPaymentMethodnables();

    //seteo la informacion de pago en vacio
    this.payCartData=new PayCartData(null,null,null);
  }

  public getSopingProducts(){
    this.cartService.getShopingProducts(this.carId).subscribe(ok=>{
      this.shopingProducts=ok;
    },err=>{
      alert(err.error.error)
    });
  }

  public getPaymentMethodnables(){
    this.paymentMethod.findByEnable().subscribe(ok=>{
      this.paymentMethodList=ok;
    },err=>{
      alert(err.error.error)
    });
  }

  public removeProduct(proId:string){
    this.cartService.removeProduct(this.shopingCartInfo.carId,proId).subscribe(ok=>{
      alert("producto eliminado exitozamente");
      this.ngOnInit();
    },err=>{
      alert(err.error.error)
    });
  }

  public payCart(){
    //seteo el cartId
    this.payCartData.cartId=this.shopingCartInfo.carId;
    //pago el carro
    this.cartService.payCart(this.payCartData).subscribe(ok=>{
      console.log(ok)
      alert("Compra realizada satisfactoriamente");
      //redirigir
      this.router.navigate(['/store']);
    },err=>{
      alert(err.error.error);
    });
  }


  //dialog comfirm
  openView() {
    var modal = document.getElementById("myModal");
    modal.style.display = "flex";
  }

  // When the user clicks on <span> (x), close the modal
  closeView() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  closeAniwhere(event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

}
