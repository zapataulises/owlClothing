import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoesListComponent } from './shoes-list/shoes-list.component';
import { CartComponent } from './cart/cart.component';
import { OwlShoesComponent } from './owl-shoes/owl-shoes.component';
import { OwlContactComponent } from './owl-contact/owl-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoesListComponent,
    CartComponent,
    OwlShoesComponent,
    OwlContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
