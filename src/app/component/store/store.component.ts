import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/domain/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  //creo un arreglo de product
  public products:Product[]

  //inyecto el servicio
  constructor(public productService: ProductService) { }

  ngOnInit(): void {
    this.findAllEnable();
  }

  findAllEnable():void{
    //hago la consulta y guardo los resultados
    //envio una variable para los datos y otra para los errores
    this.productService.findAllEnable().subscribe(data=>{
      this.products=data;
    },error=>{
      //si hay error, lo imprimo en la consola
      console.error(error)
    });
  }

}
