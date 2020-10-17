import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './component/customer/customer-list/customer-list.component';
import { ProductListComponent } from './component/product/product-list/product-list.component';
import { CustomerSaveComponent } from './component/customer/customer-save/customer-save.component';
import { CustomerEditComponent } from './component/customer/customer-edit/customer-edit.component';
import { ProductSaveComponent } from './component/product/product-save/product-save.component';
import { ProductEditComponent } from './component/product/product-edit/product-edit.component';
import { PaymentMethodComponent } from './component/paymentMethod/payment-method/payment-method.component';
import { PaymentMethodSaveComponent } from './component/paymentMethod/payment-method-save/payment-method-save.component';
import { PaymentMethodEditComponent } from './component/paymentMethod/payment-method-edit/payment-method-edit.component';

const routes: Routes = [
  {path:'customer-list',component:CustomerListComponent},
  {path:'customer-save',component:CustomerSaveComponent},
  {path:'customer-edit/:email',component:CustomerEditComponent},
  {path:'product-list',component:ProductListComponent},
  {path:'product-save',component:ProductSaveComponent},
  {path:'product-edit/:proId',component:ProductEditComponent},
  {path:'payment-list',component:PaymentMethodComponent},
  {path:'payment-save',component:PaymentMethodSaveComponent},
  {path:'payment-edit/:payId',component:PaymentMethodEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
