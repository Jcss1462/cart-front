import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/domain/user';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  //traigo la clase User
  public user: User;

  //inyecto el auth service
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    //inicializo user con valores por defecto
    this.user = new User("admin", "password");
  }

  public ingresar(): void {

    this.authService.loginUser(this.user).subscribe(data => {
      //guardo la informacion del usuario en el local storage
      localStorage.setItem("usuario", JSON.stringify(this.user));
      //coloco el token en el localstorage
      localStorage.setItem("token", data.token);
      //redirijo a customer-list
      this.router.navigate(['/customer-list']);
    }, err => {
      console.log("error");
      alert("Usuario o clave no son validos");
    }
    )
  }

}
