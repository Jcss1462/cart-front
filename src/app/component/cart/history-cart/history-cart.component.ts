import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShopingCart } from 'src/app/domain/shopingCart';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-history-cart',
  templateUrl: './history-cart.component.html',
  styleUrls: ['./history-cart.component.css']
})
export class HistoryCartComponent implements OnInit {

  public email:string;

  public shopingCarts:ShopingCart;

  constructor(public router: Router,
    public activedRoute: ActivatedRoute,
    public cartService: CartService) { }

  ngOnInit(): void {

    //obtengo los parametros de la url
    let params = this.activedRoute.params['_value'];
    this.email = params.email;
    console.log(this.email);

    //obtengo la informacion del shoping cart
    this.cartService.historyCart(this.email).subscribe(ok=>{
      this.shopingCarts=ok;
    },err=>{
      alert(err.error.error);
      //si no carga al primer intento
      //location.reload();
    });

  }

  public redirectShopingProduct(shpId: string){
    this.router.navigate(['/ShopingProductInfo',shpId]);
  }

}
