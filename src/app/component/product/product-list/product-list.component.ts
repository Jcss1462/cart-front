import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/domain/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public titulo:string="Lista product";

  //creo un arreglo de product
  public products:Product[]

  //inyecto el servicio
  constructor(public productService: ProductService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll():void{
    //hago la consulta y guardo los resultados
    //envio una variable para los datos y otra para los errores
    this.productService.findAll().subscribe(data=>{
      this.products=data;
    },error=>{
      //si hay error, lo imprimo en la consola
      console.error(error)
    });
  }

}
