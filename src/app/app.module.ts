import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';

//formModule
import {FormsModule} from '@angular/forms';

//componentes
import { CustomerListComponent } from './component/customer/customer-list/customer-list.component';
import { ProductListComponent } from './component/product/product-list/product-list.component';
import { PaymentMethodComponent } from './component/paymentMethod/payment-method/payment-method.component';
import { CustomerSaveComponent } from './component/customer/customer-save/customer-save.component';
import { CustomerEditComponent } from './component/customer/customer-edit/customer-edit.component';
import { ProductSaveComponent } from './component/product/product-save/product-save.component';
import { ProductEditComponent } from './component/product/product-edit/product-edit.component';
import { PaymentMethodSaveComponent } from './component/paymentMethod/payment-method-save/payment-method-save.component';
import { PaymentMethodEditComponent } from './component/paymentMethod/payment-method-edit/payment-method-edit.component';
import { LoginComponent } from './component/login/login.component';
import { StoreComponent } from './component/store/store.component';
import { ShopingProductInfoComponent } from './component/cart/shoping-product-info/shoping-product-info.component';

//angular fire
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {environment} from 'src/environments/environment';

import { PesosTransformPipe } from './pipes/pesos-transform.pipe';
import { HistoryCartComponent } from './component/cart/history-cart/history-cart.component';
import { CustomerEditEnableComponent } from './component/customer/customer-edit-enable/customer-edit-enable.component';
import { SpinnerComponent } from './spinner/spinner/spinner.component';




@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    ProductListComponent,
    PaymentMethodComponent,
    CustomerSaveComponent,
    CustomerEditComponent,
    ProductSaveComponent,
    ProductEditComponent,
    PaymentMethodSaveComponent,
    PaymentMethodEditComponent,
    LoginComponent,
    StoreComponent,
    PesosTransformPipe,
    ShopingProductInfoComponent,
    HistoryCartComponent,
    CustomerEditEnableComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //importo el protocolohttp
    HttpClientModule,
    //importo el formModule
    FormsModule,
    //firebase
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
