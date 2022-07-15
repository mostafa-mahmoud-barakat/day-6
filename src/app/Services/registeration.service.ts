import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RegisterationService {

  _url = 'http://localhost:3000/posts';
 
  private httpOptions:{}
  constructor(private _http:HttpClient) {
  
    this.httpOptions={
      headers:new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

   }

  register(userData: any){
    return this._http.post<any>(this._url,JSON.stringify(userData),
    this.httpOptions)
  }
}
