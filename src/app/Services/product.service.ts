import { Injectable } from '@angular/core';
import { IProduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productlist:IProduct[]
  constructor() {
    this.productlist=[
      {id:1, name:"mobile", price:2000, quantity:1, image:"https://fakeimg.pl/250x100/", categoryID:1},
      {id:5, name:"Dell", price:1000, quantity:0, image:"https://fakeimg.pl/250x100/", categoryID:1},
      {id:10, name:"iphone", price:3000, quantity:2, image:"https://fakeimg.pl/250x100/", categoryID:3},
      {id:8, name:"samsung", price:1500, quantity:1, image:"https://fakeimg.pl/250x100/", categoryID:3},
      {id:14, name:"shawmi", price:4000, quantity:0, image:"https://fakeimg.pl/250x100/", categoryID:2},
      {id:9, name:"lenovo", price:3500, quantity:5, image:"https://fakeimg.pl/250x100/", categoryID:2}
    ]
   }
   getallproducts():IProduct[]{
    return this.productlist
   }

   getproductsbycategoryID(catID:number):IProduct[]{
    if(catID==0){
      return this.getallproducts()
    }else{
      return this.productlist.filter(pdt=>pdt.categoryID==catID)
    }
   }
   getproductbyID(pdtID:number):IProduct |undefined{
    return this.productlist.find(pID=>pID.id==pdtID);
   }
 
   getprouductsbyIDonly():number[]{
    return this.productlist.map(pdt=>pdt.id)

   }
  
}
