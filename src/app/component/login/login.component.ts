import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/domain/user';
import { AuthService } from 'src/app/service/auth.service';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  //traigo la clase User
  public user: User;
  public userToken: User;

  public isLoad:Boolean;


  //inyecto el auth service
  constructor(private router: Router, private authService: AuthService, private customerService: CustomerService) { }

  ngOnInit(): void {
    //inicializo user con valores por defecto
    this.user = new User("", "");
    this.userToken = new User("", "");
    this.isLoad=false;
  }

  public ingresar(): void {

    //activo la carga
    this.isLoad=true;

    //inicio secion en firebase
    this.authService.loginFireBase(this.user)
      .then((data) => {

        console.log(data.user.uid);
        if (data.user.emailVerified == false) {
          alert("Email no verificado");
          //desactivo la carga
          this.isLoad=false;
        } else {
          alert("secion firebase iniciada");
          //creo una copia del user para que el token no aparezca en el front
          this.userToken.username = this.user.username;
          this.userToken.password = data.user.uid;
          //obtengo el token
          this.authService.loginUser(this.userToken).subscribe(token => {
            //guardo la informacion del usuario en el local storage
            localStorage.setItem("usuario", JSON.stringify(this.userToken));
            //coloco el token en el localstorage
            localStorage.setItem("token", token.token);

            //reviso el tipo de usuario
            this.customerService.findByIdWithHeaders(this.userToken.username).subscribe(userInfo => {

              //desactivo la carga
              this.isLoad=false;

              localStorage.setItem("usuarioInfo", JSON.stringify(userInfo));
              if(userInfo.customerType==1){
                this.router.navigate(['/customer-list']);
              }else{
                this.router.navigate(['/store']);
              }
              

            },e=>{
              alert("error encontrndo el usuario en el back "+e.message);
              //desactivo la carga
              this.isLoad=false;
            });

           
          }, err => {
            console.log("error");
            alert("error obteniendo el token"+"Usuario o clave no son validos");
            //desactivo la carga
            this.isLoad=false;
          });
        }

      }).catch(e => {
        alert("error iniciando secion firebase"+e.message);
        //desactivo la carga
        this.isLoad=false;
      });

  }

}
