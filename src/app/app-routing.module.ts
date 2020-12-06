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
import { StoreComponent } from './component/store/store.component';
import { ShopingProductInfoComponent } from './component/cart/shoping-product-info/shoping-product-info.component';
import { HistoryCartComponent } from './component/cart/history-cart/history-cart.component';
import { CustomerEditEnableComponent } from './component/customer/customer-edit-enable/customer-edit-enable.component';


//usrare el guard de firebase
//import { AuthGuard } from './guard/auth.guard';
import { AdminGuard } from './guard/admin.guard';

import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
//si no esta autorizado envio al login
const redirectUnauthorizedToLogin=()=>redirectUnauthorizedTo(['login']);

const routes: Routes = [
  //rutas que requieren de autenticacion para acceder
  {path:'customer-list',component:CustomerListComponent,canActivate:[AngularFireAuthGuard,AdminGuard],data:{authGuardPipe:redirectUnauthorizedToLogin}},
  {path:'customerEditEnable/:email',component: CustomerEditEnableComponent,canActivate:[AngularFireAuthGuard,AdminGuard],data:{authGuardPipe:redirectUnauthorizedToLogin}},
  {path:'product-list',component:ProductListComponent,canActivate:[AngularFireAuthGuard,AdminGuard],data:{authGuardPipe:redirectUnauthorizedToLogin}},
  {path:'product-save',component:ProductSaveComponent,canActivate:[AngularFireAuthGuard,AdminGuard],data:{authGuardPipe:redirectUnauthorizedToLogin}},
  {path:'product-edit/:proId',component:ProductEditComponent,canActivate:[AngularFireAuthGuard,AdminGuard],data:{authGuardPipe:redirectUnauthorizedToLogin}},
  {path:'payment-list',component:PaymentMethodComponent,canActivate:[AngularFireAuthGuard,AdminGuard],data:{authGuardPipe:redirectUnauthorizedToLogin}},
  {path:'payment-save',component:PaymentMethodSaveComponent,canActivate:[AngularFireAuthGuard,AdminGuard],data:{authGuardPipe:redirectUnauthorizedToLogin}},
  {path:'payment-edit/:payId',component:PaymentMethodEditComponent,canActivate:[AngularFireAuthGuard,AdminGuard],data:{authGuardPipe:redirectUnauthorizedToLogin}},

  
  {path:'store',component:StoreComponent,canActivate:[AngularFireAuthGuard],data:{authGuardPipe:redirectUnauthorizedToLogin}},
  {path:'store/:queryType/:query',component:StoreComponent,canActivate:[AngularFireAuthGuard],data:{authGuardPipe:redirectUnauthorizedToLogin}},
  {path:'store/:queryType/:queryFrom/:queryTo',component:StoreComponent,canActivate:[AngularFireAuthGuard],data:{authGuardPipe:redirectUnauthorizedToLogin}},

  {path:'ShopingProductInfo/:carId',component:ShopingProductInfoComponent,canActivate:[AngularFireAuthGuard],data:{authGuardPipe:redirectUnauthorizedToLogin}},
  {path:'historyCart/:email',component:HistoryCartComponent,canActivate:[AngularFireAuthGuard],data:{authGuardPipe:redirectUnauthorizedToLogin}},

  {path:'customer-save',component:CustomerSaveComponent},
  {path:'customer-edit/:email',component:CustomerEditComponent,canActivate:[AngularFireAuthGuard],data:{authGuardPipe:redirectUnauthorizedToLogin}},
  {path:'login',component:LoginComponent},
  {path:'',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
