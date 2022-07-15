import { Component, OnInit } from '@angular/core';
import { Icategory } from 'src/app/Models/icategory';

@Component({
  selector: 'app-orderd-master',
  templateUrl: './orderd-master.component.html',
  styleUrls: ['./orderd-master.component.scss']
})
export class OrderdMasterComponent implements OnInit {

  selectedCatID:number=0 ;
  catagorylist:Icategory[]
  receivedOrderTotalPrice: number=0;
  constructor() {
    this.catagorylist=[
      {id:1, name:"laptop"},
      {id:2, name:'mobile'},
      {id:3, name:'TV'}

    ]
   }

  ngOnInit(): void {
  }

  onTotalPriceChanged(totalPrice:number){
    this.receivedOrderTotalPrice =totalPrice;
  }

}
