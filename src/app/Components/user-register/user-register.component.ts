import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterationService } from './../../Services/registeration.service';
 
@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss'],
})
export class UserRegisterComponent implements OnInit {

  userformGroup:FormGroup;
  constructor(private fb:FormBuilder, private _registerationservice:RegisterationService) {
    // this.userformGroup=new FormGroup({
    //   fullName: new FormControl('',[Validators.required, Validators.minLength(5)]),
    //     email:new FormControl(''),
    //     mobileNo:new FormControl(''),
    //     address:new FormGroup({
    //       city: new FormControl(''),
    //       postalCode: new FormControl(''),
    //       street: new FormControl('')
    //     }),
    //     password: new FormControl('')
    // })
    this.userformGroup=this.fb.group({
     fullName:['',[Validators.required, Validators.minLength(5)]],
     email:['',[Validators.required, Validators.pattern(/^[a-zA-Z]{3,5}(@)[0-9]{3}(gmail.com)$/)]],
    //  mobileNo:fb.array([fb.control('',[Validators.required, Validators.pattern(/^(01)(0|1|2|5)[0-9]{8}$/)])]),
     mobileNo:fb.array([fb.control('',[ ])]),
    address:this.fb.group({
        city:['',[Validators.required]],
        postalCode:['',[Validators.required]],
        street:['',[Validators.required]]
    }),
    password:['',[Validators.required, Validators.minLength(6)]]
    })
   }
//properties////////////////////////////
   get fullName(){
    return this.userformGroup.get("fullName")
   }
   get email(){
    return this.userformGroup.get("email")
   }
   get mobileNo(){
   return this.userformGroup.get("mobileNo") as FormArray;
   }
   addMobile(){
    this.mobileNo.push(this.fb.control(''));
   }
  //  deleteMobile(){
  //   this.mobileNo.removeAt(this.fb.control(''));
  //  }
   get city(){
    return this.userformGroup.get("address.city")
   }
   get postalCode(){
    return this.userformGroup.get("address.postalCode")
   }
   get street(){
    return this.userformGroup.get("address.street")
   }
   get password(){
    return this.userformGroup.get("password")
   }

   onSubmit(){
    console.log(this.userformGroup.value);
    this._registerationservice.register(this.userformGroup.value).subscribe({
      next:(prd)=>{
         alert("success..!")
      },
      error:(err)=>{
        alert("there is error during adding new user")
      }
    })
    //to reset inputs
  this.userformGroup.reset()
   }
   
    
   

  ngOnInit(): void {
    
  }

}

