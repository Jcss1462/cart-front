import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PesosTransformPipe } from './pipes/pesos-transform.pipe';
import { AuthService } from './service/auth.service';
import { CartService } from './service/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cart-front';

  public priceFrom: number;
  public priceTo: number;
  public query: string;

  public all: boolean;
  public isName: boolean;
  public isDescription: boolean;
  public isPrecio: boolean;

  public customerInfo;

  constructor(public cartService: CartService, public router: Router, public authService :AuthService) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    }
  }

  ngOnInit(): void {
    //seteo los parametros de busquedad
    this.all = true;
    this.isName = false;
    this.isDescription = false
    this.isPrecio = false;

    this.query = "";

    this.priceFrom = null;
    this.priceTo = null;

    if(localStorage.getItem("usuarioInfo")){
      this.customerInfo=JSON.parse(localStorage.getItem("usuarioInfo"));
    }

  }

  public isAuth(): boolean {
    //si el elemento esta retorna true, y si no false
    return !!localStorage.getItem('usuarioInfo');
  }

  public activarOpt(): void {
    let activador = document.getElementById("selectSpace");
    activador.classList.toggle('active');
  }

  public closOptAniwhere(): void {

  }

  public goToShopingProduct(): void {
    let em = JSON.parse(localStorage.getItem("usuarioInfo")).email;
    this.cartService.getCurrentCart(em).subscribe(data => {

      //console.log(data);

      //redirigir
      this.router.navigate(['/ShopingProductInfo', data.carId]);

    }, error => {
      //si hay error, lo imprimo en la consola
      console.error(error);
      //si no carga al primer intento
      location.reload();
    });
  }

  public goToHistory(): void {
    //redirijo al historial
    let em = JSON.parse(localStorage.getItem("usuarioInfo")).email;
    this.router.navigate(['/historyCart', em]);

    //cierro el menu
    let activador = document.getElementById("selectSpace");
    activador.classList.toggle('active');
  }


  public searchParams() {
    if (this.isName == false) {
      this.all = false;
      this.isDescription = false;
      this.isPrecio = false;
    }
    if (this.isDescription == false) {
      this.all = false;
      this.isName = false;
      this.isPrecio = false;
    }

    if (this.isPrecio == false) {
      this.all = false;
      this.isName = false;
      this.isDescription = false;
    }

    if (this.all == false) {
      this.isName = false;
      this.isDescription = false;
      this.isPrecio = false;
    }

  }

  //busqueda
  public search(): void {
    if (this.isName == false && this.isDescription == false && this.isPrecio == false) {
      this.router.navigate(['/store']);
    }

    if (this.isName == true) {
      if (this.query == null || this.query == undefined) {
        this.query = "";
      }
      this.router.navigate(['/store', "name", this.query]);
    }

    if (this.isDescription == true) {
      if (this.query == null || this.query == undefined) {
        this.query = "";
      }
      this.router.navigate(['/store', "description", this.query]);
    }
    
    if (this.isPrecio == true) {

      if (this.priceFrom == null || this.priceFrom == undefined) {
        this.priceFrom = 0;
      }

      if (this.priceTo == null || this.priceTo == undefined) {
        this.priceTo = 0;
      }

      this.router.navigate(['/store', "precio", this.priceFrom, this.priceTo]);
    }
  }

  public logOut(){
    this.authService.logOutFirebase().then(()=>{
      alert("secionCerrada")
      this.router.navigate(['/login'])
    }).catch((e)=>{
      alert(e)
    });
  }

  public editUser(){
    let em = JSON.parse(localStorage.getItem("usuarioInfo")).email;
    this.router.navigate(['/customer-edit',em]);

    //cierro el menu
    let activador = document.getElementById("selectSpace");
    activador.classList.toggle('active');
  }

  public goCustomerList(){
    this.router.navigate(['/customer-list']);
  }


}
