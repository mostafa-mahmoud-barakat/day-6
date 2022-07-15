import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, map, Subscription } from 'rxjs';
import { ClassStore } from 'src/app/Models/class-store';
import { Icategory } from 'src/app/Models/icategory';
import { IProduct } from 'src/app/Models/iproduct';
import { PromotionAdsService } from 'src/app/Services/promotion-ads.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,OnDestroy {

//interface2
Icategory:Icategory={id: 20,name:'Angular'
}


//interface1
IProduct:IProduct={id: 5, 
  name:'ITI interface',
  quantity:50,
  price: 250,
  image:'https://fakeimg.pl/250x100/',
  categoryID: 900
 }


//////////////
//class property
classStoreData:ClassStore

subscription:Subscription[]=[]
  getscheduleAds: any;

  constructor(private promoAds:PromotionAdsService) { 
    this.classStoreData= new ClassStore('ITI class',  
    ["Alex","Cairo", "Giza","sohag"],
    'https://fakeimg.pl/250x100/')
  }
  
  
  //flag property
  ClientName :string="Mostafa"
  buy:boolean=false
   showimg:boolean=true;
   toggleimg(){
    this.buy=!this.buy
    this.showimg=!this.showimg 
    

  }

  ngOnInit(): void {
   
    let AdsSubscription=this.promoAds.getscheduleAds(2).subscribe({
        next:(data:string)=>{
          console.log(data)
        },
        error:(error:string)=>{
          console.log(error)
        },
        complete:()=>{
          console.log("ads are finished")
        },
      })
      this.subscription.push(AdsSubscription)

    //operators
    // let observer={
    //   next:(data:string)=>{
    //           console.log(data)
    //         },
    //         error:(error:string)=>{
    //           console.log(error)
    //         },
    //         complete:()=>{
    //           console.log("ads are finished")
    //         },
    // }
    // let filterobser = this.promoAds.getscheduleAds(3).pipe(
    //   filter(ad=>ad.includes("new year")),map(ad=>"AD:"+ad)
    // )
    // let AdsSubscription=filterobser.subscribe(observer)
    // this.subscription.push(AdsSubscription);
    // }
    
    }
    ngOnDestroy(): void {
      for(let sub of this.subscription){
        sub.unsubscribe
      }
    }
  }


