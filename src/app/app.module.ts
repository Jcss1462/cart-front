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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //importo el protocolohttp
    HttpClientModule,
    //importo el formModule
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
