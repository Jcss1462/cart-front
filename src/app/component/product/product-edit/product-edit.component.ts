import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Enable } from 'src/app/domain/enable';
import { Product } from 'src/app/domain/product';
import { EnableService } from 'src/app/service/enable.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  public proId: string;
  public product: Product;
  public enables: Enable[];

  public showMsg: boolean = false;
  public messages: string[] = [""]

  constructor(public router: Router,
    public activedRoute: ActivatedRoute,
    public productService: ProductService,
    public enableService: EnableService) { }

  ngOnInit(): void {
    //obtengo los parametros de la url
    let params = this.activedRoute.params['_value'];
    this.proId = params.proId
    console.log(this.proId);

    //inicializo el product para eviar errores de desconocido
    this.product=new Product("","","","","",null);

    //traigo los enables
    this.findAllEnable();
    //obtengo la informacion del  product que accedio
    this.findById();

  }

  //lleno mi arreglo de enables con los del servicio
  public findAllEnable(): void {
    this.enables = this.enableService.findAll();
  }

  public findById(): void {
    this.productService.findById(this.proId).subscribe(data => {
      this.product = data;
      console.table(this.product);
    })
  }

  public update():void{
    this.messages=[""];
    this.productService.update(this.product).subscribe(ok=>{
      //si todo sale bien activo los mensajes
      this.showMsg=true;
      this.messages[0]="El producto se actualizo con exito";
    },err=>{
      //si algo sale mal activo los mensajes
      //el segundo error el del back
      this.showMsg=true;
      this.messages=err.error.error;
    });
  }

}
