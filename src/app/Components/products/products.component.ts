import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { VirtualTimeScheduler } from 'rxjs';
import { Icategory } from 'src/app/Models/icategory';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductService } from 'src/app/Services/product.service';
import { ProductsApiService } from 'src/app/Services/products-api.service';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit,OnChanges {
  
  //day 5
  prdlistofID!:IProduct[]
  receivedID!:number;
// day3
prdlistofcat:IProduct[]=[]
@Input() receivedcatID:number=0;
orderrotalprice:number=0;
@Output() totalpricechanged:EventEmitter<number>;  //child to parent
 
  //declear property for date
  currentdate:Date=new Date()
  products: IProduct[] = [];

  //declear array from iproduct type
  
  // catagorylist:Icategory[]
  // productlist:IProduct[]
  // selectedCatID:number=0 ; //for lab


  constructor( private route:ActivatedRoute  ,private productservices:ProductService, private router:Router,private prdAPIService:ProductsApiService) {
    this.totalpricechanged=new EventEmitter<number>();  //child to parent


    //initialise array with anonymous object
    // this.productlist=[
    //   {id:1, name:"mobile", price:2000, quantity:1, image:"https://fakeimg.pl/250x100/", categoryID:1},
    //   {id:5, name:"Dell", price:1000, quantity:0, image:"https://fakeimg.pl/250x100/", categoryID:1},
    //   {id:10, name:"iphone", price:3000, quantity:2, image:"https://fakeimg.pl/250x100/", categoryID:3},
    //   {id:8, name:"samsung", price:1500, quantity:1, image:"https://fakeimg.pl/250x100/", categoryID:3},
    //   {id:14, name:"shawmi", price:4000, quantity:0, image:"https://fakeimg.pl/250x100/", categoryID:2},
    //   {id:9, name:"lenovo", price:3500, quantity:5, image:"https://fakeimg.pl/250x100/", categoryID:2}
    // ]

    // this.catagorylist=[
    //   {id:1, name:"laptop"},
    //   {id:2, name:'mobile'},
    //   {id:3, name:'TV'}

    // ]
   }
  ngOnChanges(): void {
    // this.getprdofcategory()
    this.prdlistofcat= this.productservices.getproductsbycategoryID(this.receivedcatID)

  }

  val!:number;
  Product!: IProduct 
  ngOnInit(): void {

   //day 6 task /////////////////////
   let sub= this.route.params.subscribe(params =>{
    this.val=params['id'];
   })
   console.log("id:"+this.val)
   this.prdAPIService.getupdatedPdt(this.val).subscribe(data=>{
    this.Product=data
   })

    // this.getprdofcategory();
    // this.prdlistofcat= this.productservices.getproductsbycategoryID(this.receivedcatID) //not coming from input
     this.prdAPIService.getAllProducts().subscribe(prdlist=>{
      this.prdlistofcat=prdlist
     })
     this.prdAPIService.getproductsByCatID(this.receivedcatID).subscribe(data=>{
      this.prdlistofcat=data
     })
      
     this.prdAPIService.getproductByID(this.receivedcatID).subscribe(ID=>{
      // this.receivedID.valueOf()
     console.log(ID)
     })
  }

  // private getprdofcategory(){
  //   if(this.receivedcatID==0){ //to take copy
  //     this.prdlistofcat=Array.from(this.productlist)
  //     return;
  //   }
   
  //   this.prdlistofcat= this.productlist.filter((ted)=> ted.categoryID==this.receivedcatID) // to filter 
  //  }
   updatTotalprice(tedprice:number, itemcount:any){
    // this.orderrotalprice +=(tedprice*itemcount)
    // 3 ways to convert from string to number
    this.orderrotalprice +=(tedprice* parseInt(itemcount))
    // this.orderrotalprice +=(tedprice* Number(itemcount))
    // this.orderrotalprice +=(tedprice*itemcount as number)
    // this.orderrotalprice +=(tedprice* +itemcount)
    this.totalpricechanged.emit(this.orderrotalprice);
   }

   openproductdetails(pdtID:number){
    this.router.navigate(['Products',pdtID]) //one path of routing

   }
  //  deleteproduct(id:number){
  //   if(confirm("do is delete this product?")){
  //     this.prodapi.deleteproduct(id).subscribe(() => {
  //       alert(`delete product ${id}`)  });
  //       this.prodapi.getallproduct().subscribe((res)=>{
  //         this.prodListOfCateg=res
  //       })
  //       }else{
  //         alert("you cancel delete")
  //       }
  //   }

   deleteRow(id:number){
    if(confirm("Are your sure to delete?")){
    this.prdAPIService.deletePdt(id).subscribe( ()=>{ 
      alert(`delete product ${id}`) 
    })
    this.prdAPIService.getAllProducts().subscribe((response)=>{
      this.products=response
    })
   }
  }
 //day 6/////////////////////////////////
  updateProduct(id: any){
    this.router.navigate(['/Updating', id])
    this.prdAPIService.updatePdt(this.Product).subscribe(data=>{

    })
    this.getAllProducts();
    this.router.navigate(['NewProduct'])
  }
  getAllProducts(){
    this.prdAPIService.getAllProducts().subscribe((response)=>{
      this.products=response
    })
  }

}



function push(ID: IProduct): IProduct[] {
  throw new Error('Function not implemented.');
}

