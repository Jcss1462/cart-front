import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cart-front';

  public isAuth():boolean{
    //si el elemento esta retorna true, y si no false
    return !!localStorage.getItem('usuario');
  }

}
