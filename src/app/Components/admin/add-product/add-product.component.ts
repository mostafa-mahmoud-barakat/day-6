import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Icategory } from 'src/app/Models/icategory';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductsApiService } from 'src/app/Services/products-api.service';
// import { IProduct } from './../../../Models/iproduct';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

// ID:any
// updatedProduct:any
  // day6 No.4
  catList:Icategory[]
  newPdt:IProduct={} as IProduct

  constructor(private prdServiceAPI:ProductsApiService,private router:Router) { 
    this.catList=[
      {id:1, name:"laptop"},
      {id:2, name:'mobile'},
      {id:3, name:'TV'}
    ]
  }

  ngOnInit(): void {
  }

  InsertNewProduct(){
 //day 5 No. 3

  //   let testNewProduct:IProduct={
  //     id: 35,
  //     name: 'NewProduct',
  //     price: 4000,
  //     quantity: 6,
  //     image:"https://fakeimg.pl/250x100/",
  //     categoryID: 3
  //   }
  //   this.prdServiceAPI.addNewProduct(testNewProduct).subscribe({
  //     next:(prd)=>{
  //       this.router.navigate(['/Products']);
  //     },
  //     error:(err)=>{
  //       alert("there is error during adding new product")
  //     }
  //   })

  //day 6 No. 4
  this.prdServiceAPI.addNewProduct(this.newPdt).subscribe({
    next:(prd)=>{
            this.router.navigate(['/Products']);
          },
          error:(err)=>{
            alert("there is error during adding new product")
          }

  })
  }
 

}
 