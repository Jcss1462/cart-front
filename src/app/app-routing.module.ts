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
import { LoginComponent } from './component/login/login.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  //rutas que requieren de autenticacion para acceder
  {path:'customer-list',component:CustomerListComponent,canActivate:[AuthGuard]},
  {path:'customer-save',component:CustomerSaveComponent,canActivate:[AuthGuard]},
  {path:'customer-edit/:email',component:CustomerEditComponent,canActivate:[AuthGuard]},
  {path:'product-list',component:ProductListComponent,canActivate:[AuthGuard]},
  {path:'product-save',component:ProductSaveComponent,canActivate:[AuthGuard]},
  {path:'product-edit/:proId',component:ProductEditComponent,canActivate:[AuthGuard]},
  {path:'payment-list',component:PaymentMethodComponent,canActivate:[AuthGuard]},
  {path:'payment-save',component:PaymentMethodSaveComponent,canActivate:[AuthGuard]},
  {path:'payment-edit/:payId',component:PaymentMethodEditComponent,canActivate:[AuthGuard]},
  
  {path:'login',component:LoginComponent},
  {path:'',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
