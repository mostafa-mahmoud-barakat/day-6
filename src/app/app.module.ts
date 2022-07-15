import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { HomeComponent } from './Components/home/home.component';
import { ProductsComponent } from './Components/products/products.component';
import { ShadowDirective } from './shop card/shadow.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderdMasterComponent } from './Components/orderd-master/orderd-master.component';
import { NotFoundPageComponent } from './Components/not-found-page/not-found-page.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import{HttpClientModule}from'@angular/common/http';
import { AddProductComponent } from './Components/admin/add-product/add-product.component';
import { UserRegisterComponent } from './Components/user-register/user-register.component';
import { MainlyLayoutComponent } from './Components/mainly-layout/mainly-layout.component';
 
 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent,
    ProductsComponent,
    ShadowDirective,
    OrderdMasterComponent,
    NotFoundPageComponent,
    ProductDetailsComponent,
    AddProductComponent,
    UserRegisterComponent,
    MainlyLayoutComponent,
    

  ],
  imports: [
 
  BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
