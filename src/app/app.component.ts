import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from './service/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cart-front';

  constructor(public cartService: CartService, public router:Router) { }

  public isAuth():boolean{
    //si el elemento esta retorna true, y si no false
    return !!localStorage.getItem('usuario');
  }

  public activarOpt(): void {
    let activador= document.getElementById("selectSpace");
    activador.classList.toggle('active');
  }

  public goToShopingProduct(): void {
    let em=JSON.parse(localStorage.getItem("user")).email;
    this.cartService.getCurrentCart(em).subscribe(data=>{
      
      //console.log(data);

      //redirigir
      this.router.navigate(['/ShopingProductInfo',data.carId]);

    },error=>{
      //si hay error, lo imprimo en la consola
      console.error(error)
    });    
  }

  


}
