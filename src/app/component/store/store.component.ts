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
  public products: Product[];

  public productView: Product;
  //inyecto el servicio
  constructor(public productService: ProductService) { }

  ngOnInit(): void {
    this.findAllEnable();
    this.productView=null;
  }

  findAllEnable(): void {
    //hago la consulta y guardo los resultados
    //envio una variable para los datos y otra para los errores
    this.productService.findAllEnable().subscribe(data => {
      this.products = data;
    }, error => {
      //si hay error, lo imprimo en la consola
      console.error(error)
    });
  }

  openView(product:Product) {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
    this.productView=product;
  }

  // When the user clicks on <span> (x), close the modal
  closeView() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  closeAniwhere(event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

}
