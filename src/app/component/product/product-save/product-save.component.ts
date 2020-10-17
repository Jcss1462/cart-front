import { Component, OnInit } from '@angular/core';
import { Enable } from 'src/app/domain/enable';
import { Product } from 'src/app/domain/product';
import { EnableService } from 'src/app/service/enable.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-save',
  templateUrl: './product-save.component.html',
  styleUrls: ['./product-save.component.css']
})
export class ProductSaveComponent implements OnInit {


  public product: Product;
  public enables: Enable[];

  public showMsg: boolean = false;
  public messages: string[] = [""];
  constructor(public productSave: ProductService,
    public enableService: EnableService) { }

  ngOnInit(): void {
    //al llamar este componente inicializo el product vvacio, dejando enble en Y por defecto
    this.product = new Product("", "", "Y", "", "", null);
    this.findAllEnable();
  }

  //lleno mi arreglo de enables con los del servicio
  public findAllEnable(): void {
    this.enables = this.enableService.findAll();
  }

  //guardo cuando oprimo el boton
  public save(): void {
    this.messages = [""];
    this.productSave.save(this.product).subscribe(ok => {
      //si todo sale bien activo los mensajes
      this.showMsg = true;
      this.messages[0] = "El producto se grabo con exito";
    }, err => {
      //si algo sale mal activo los mensajes
      //el segundo error el del back
      this.showMsg = true;
      this.messages = err.error.error;
    });
  }

}
