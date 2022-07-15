import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './Components/admin/add-product/add-product.component';
import { HomeComponent } from './Components/home/home.component';
import { MainlyLayoutComponent } from './Components/mainly-layout/mainly-layout.component';
import { NotFoundPageComponent } from './Components/not-found-page/not-found-page.component';
import { OrderdMasterComponent } from './Components/orderd-master/orderd-master.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ProductsComponent } from './Components/products/products.component';
import { UserRegisterComponent } from './Components/user-register/user-register.component';

const routes: Routes = [
  {path:'',component:MainlyLayoutComponent,children:[
  {path:'', redirectTo:'/Home',pathMatch:'full'}, 
  {path:'Home', component:HomeComponent},
  {path:'Products', component:ProductsComponent},
  {path:'Products/:pid', component:ProductDetailsComponent},
  {path:'Order', component:OrderdMasterComponent},
  {path:'Cart', component:OrderdMasterComponent},
  {path:'NewProduct', component:AddProductComponent},
  {path:'Updating/:id', component:AddProductComponent},
]},
  {path:'register', component:UserRegisterComponent},
  {path:'**', component:NotFoundPageComponent},
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
