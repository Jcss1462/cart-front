import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/domain/customer';
import { Enable } from 'src/app/domain/enable';
import { User } from 'src/app/domain/user';
import { AuthService } from 'src/app/service/auth.service';
import { CartService } from 'src/app/service/cart.service';
import { CustomerService } from 'src/app/service/customer.service';
import { EnableService } from 'src/app/service/enable.service';

@Component({
  selector: 'app-customer-save',
  templateUrl: './customer-save.component.html',
  styleUrls: ['./customer-save.component.css']
})
export class CustomerSaveComponent implements OnInit {

  public customer: Customer;
  public enables: Enable[];


  //inyecto el servicio de customer y el servicio local de enable
  constructor(public customerService: CustomerService,
    public autSrevice: AuthService,
    public enableService: EnableService,
    public router: Router,
    public cartService: CartService) { }

  ngOnInit(): void {
    //al llamar este componente inicializo el customer vacio, dejando enble en Y por defecto
    this.customer = new Customer("", "", "Y", "", "", "");
    this.findAllEnable();
  }

  //lleno mi arreglo de enables con los del servicio
  public findAllEnable(): void {
    this.enables = this.enableService.findAll();
  }

  //guardo cuando oprimo el boton
  public save(): void {


    //valido y guardo los datos en el back
    this.customerService.save(this.customer).subscribe(ok => {

      alert("El customer se grabo con exito en el back");
      
      //si todo sale bien registro en firebase
      this.autSrevice.createUser(this.customer.email, this.customer.token)
        .then((data) => {
          alert("usuario registrado exitozamente en firebase");
          this.autSrevice.sendEmailVerification();

          //obtengo el token temporalmente
          let user = new User("","");
          user.username = this.customer.email;
          user.password = this.customer.token;


          this.autSrevice.loginUser(user).subscribe(jwt => {
            alert("token temporal obtenido");
            
            
            //actualizo la contraseña en el back
            this.customer.token = data.user.uid;
            this.customerService.updateCreate(this.customer, jwt.token).subscribe(ok => {
              alert("Proceso de registro satisfactoriamente");
              console.log(ok);


              //le creo al usuario su primer shopingCart
              this.cartService.createFirstCart(ok,jwt.token).subscribe(i => {
                alert("Shoping cart creado satisfactoriamente");
                this.router.navigate(['/login']);
              }, err => {
                alert("error al crear el shoping cart inicial: " + err.error.error);
              });

            }, err => {
              alert(err.error.error);
            });

          }, err => {
            alert(err.error.error);
          })

        }).catch(e => {
          alert(e.message);
        });

    }, err => {
      //el segundo error el del back
      alert(err.error.error);
    });

  }

}
