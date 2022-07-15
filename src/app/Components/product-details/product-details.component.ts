import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductService } from 'src/app/Services/product.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  ptd:IProduct|undefined=undefined
  currentprouductID:number=0
  arrayofreceivedIDonly:number[]=[]
  currentindex:number=0
  constructor(private productservices:ProductService, private router:Router, private activateRoute:ActivatedRoute, private location:Location) { }

  ngOnInit(): void {
    // let sendaddedID=this.activateRoute.snapshot.paramMap.get('addedid')
    // console.log(sendaddedID)

    // let sendaddedID:number=(this.activateRoute.snapshot.paramMap.get('pid'))?Number(this.activateRoute.snapshot.paramMap.get('pid')):0; 
    // let foundedID=this.productservices.getproductbyID(sendaddedID)
    // if(foundedID){
    //   this.ptd=foundedID
    //   // console.log(this.ptd)
    // }else{
    //   alert("product not found")
    //   this.location.back()
    // }
    // this.currentindex=this.arrayofreceivedIDonly.findIndex((item)=>item==this.currentprouductID)
    // console.log(this.currentindex)

  //   this.currentprouductID=(this.activateRoute.snapshot.paramMap.get('pid'))?Number(this.activateRoute.snapshot.paramMap.get('pid')):0; 
  //   let foundedID=this.productservices.getproductbyID(this.currentprouductID)
  //   if(foundedID){
  //     this.ptd=foundedID
  //     // console.log(this.ptd)
  //   }else{
  //     alert("product not found")
  //     this.location.back()
  //   }

  this.arrayofreceivedIDonly=this.productservices.getprouductsbyIDonly()
  // console.log(this.arrayofreceivedIDonly)  //all indexes

  this.activateRoute.paramMap.subscribe(
    paramMap=>{
      this.currentprouductID=(paramMap.get('pid'))?Number(paramMap.get('pid')):0;
      let foundedID=this.productservices.getproductbyID(this.currentprouductID)
    if(foundedID){
      this.ptd=foundedID
      // console.log(this.ptd)
    }else{
      alert("product not found")
      this.location.back()
    }
    }
  )
  }

  goBack(){
    this.location.back()
  }

  prevbtn(){
    this.currentindex=this.arrayofreceivedIDonly.findIndex((item)=>item==this.currentprouductID)
    this.router.navigate(['/Products',this.arrayofreceivedIDonly[--this.currentindex]])
  }

  nextbtn(){
    this.currentindex=this.arrayofreceivedIDonly.findIndex((item)=>item==this.currentprouductID)
    this.router.navigate(['/Products',this.arrayofreceivedIDonly[++this.currentindex]])
  }

}
