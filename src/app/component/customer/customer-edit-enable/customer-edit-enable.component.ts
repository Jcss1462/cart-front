import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/domain/customer';
import { Enable } from 'src/app/domain/enable';
import { CustomerService } from 'src/app/service/customer.service';
import { EnableService } from 'src/app/service/enable.service';

@Component({
  selector: 'app-customer-edit-enable',
  templateUrl: './customer-edit-enable.component.html',
  styleUrls: ['./customer-edit-enable.component.css']
})
export class CustomerEditEnableComponent implements OnInit {

  public email: string;
  public customer: Customer;
  public enables: Enable[];

  constructor(
    public router: Router,
    public activedRoute: ActivatedRoute,
    public customerService: CustomerService,
    public enableService: EnableService
  ) { }

  ngOnInit(): void {
    let params = this.activedRoute.params['_value'];
    this.email = params.email;

    //traigo los enables
    this.findAllEnable();

    this.findById();
  }

  public findAllEnable(): void {
    this.enables = this.enableService.findAll();
  }

  public findById(): void {
    this.customerService.findById(this.email).subscribe(data => {
      this.customer = data;
      console.table(this.customer);
    })
  }

  public update(): void {

    this.customerService.update(this.customer).subscribe(ok => {
      alert("El customer se actualizo con exito");
    }, err => {
      alert(err.error.error);
    });

  }

}
