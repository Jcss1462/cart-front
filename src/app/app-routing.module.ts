import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './component/customer-list/customer-list.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { PaymentMethodComponent } from './component/payment-method/payment-method.component';
import { CustomerSaveComponent } from './component/customer-save/customer-save.component';
import { CustomerEditComponent } from './component/customer-edit/customer-edit.component';

const routes: Routes = [
  {path:'customer-list',component:CustomerListComponent},
  {path:'customer-save',component:CustomerSaveComponent},
  {path:'customer-edit/:email',component:CustomerEditComponent},
  {path:'product-list',component:ProductListComponent},
  {path:'payment-list',component:PaymentMethodComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
