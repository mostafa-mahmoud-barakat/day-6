import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromotionAdsService {

  private adslist:string[];
  constructor() {
    this.adslist=[
      "oppo offers for happy new year",
      "its our annual offers for new year",
      // "",
      "come to buy what you want and see our offers ",
      "it offers for our new branche in alex"
    ]
   }
   getscheduleAds(intervalInSeconds:number):Observable<string>{
    return new Observable<string>((observer)=>{
      let counter=0
      let adTimer=setInterval(()=>{
   console.log("inside interval")
        if(counter==this.adslist.length){
          observer.complete();
        }
////////////////////////
       if(this.adslist[counter]==""){
        observer.error("there is error in ad")
       }
        ////////////
        observer.next(this.adslist[counter])
        counter++

      },intervalInSeconds*1000)
      return {
        unsubscribe(){
          clearInterval(adTimer)
          console.log("observable is unsubscribe")
        }
      }
    })
   }
}
