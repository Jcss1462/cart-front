import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/domain/customer';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  public email: string;
  public customer: Customer;

  constructor(public router: Router,
    public activedRoute: ActivatedRoute,
    public customerService: CustomerService) { }

  ngOnInit(): void {
    //obtengo los parametros de la url
    let params = this.activedRoute.params['_value'];
    this.email = params.email
    console.log(this.email);
    //obtengo la informacion del  customer que accedio
    this.findById();
  }

  public findById(): void {
    this.customerService.findById(this.email).subscribe(data => {
      this.customer = data;
      console.table(this.customer);
    })
  }

}
