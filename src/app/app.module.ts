import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';

//formModule
import {FormsModule} from '@angular/forms';

//componentes
import { CustomerListComponent } from './component/customer-list/customer-list.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { PaymentMethodComponent } from './component/payment-method/payment-method.component';
import { CustomerSaveComponent } from './component/customer-save/customer-save.component';
import { CustomerEditComponent } from './component/customer-edit/customer-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    ProductListComponent,
    PaymentMethodComponent,
    CustomerSaveComponent,
    CustomerEditComponent
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
