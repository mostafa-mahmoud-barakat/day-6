import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_ID, Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProduct } from '../Models/iproduct';
import { ProductFetch } from '../Models/product-fetch';

@Injectable({
  providedIn: 'root'
})
export class ProductsApiService {

  private httpOptions:{}
  // headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept','application/json');
  // httpOptions={
  //   headers:this.headers
  // }
  constructor(private httpClient:HttpClient) {
    this.httpOptions={
      headers:new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

   }


  getAllProducts():Observable<IProduct[]>{
    return this.httpClient.get<IProduct[]>(`${environment.APIBaseURL}/Products`)
  }


  getproductsByCatID(catID:number):Observable<IProduct[]>{
    return this.httpClient.get<IProduct[]>(`${environment.APIBaseURL}/Products/catId=${catID}`)
  }
  getproductByID(pid:number):Observable<IProduct>{
    return this.httpClient.get<IProduct>(`${environment.APIBaseURL}/Products/${pid}`)
  }
  addNewProduct(newPred:IProduct):Observable<IProduct>{
    return this.httpClient.post<IProduct>(`${environment.APIBaseURL}/Products`,JSON.stringify(newPred),
    this.httpOptions)
    // .pipe(
    //   retry(3),catchError((err)=>{
    //           return throwError(()=>{
    //             return new Error('Please try again, there is error')
    //           })
    //   })
    // )
  }

  updatePdt(product:ProductFetch):Observable<IProduct>{
    return this.httpClient.put<ProductFetch>(`${environment.APIBaseURL}/Products/${product.id}}`, product ,
    this.httpOptions).pipe(map(()=>product)
    )
  }
  getupdatedPdt(id:number):Observable<IProduct>{
    return this.httpClient.put<IProduct>(`${environment.APIBaseURL}/Products/${id}}`, 
    this.httpOptions) 
  }
   
  deletePdt(id:number):Observable<void>{
    return this.httpClient.delete<void>(`${environment.APIBaseURL}/Products/${id}}`)
    .pipe(retry(2),catchError((err)=>{
          return throwError(()=>{
            return new Error('Error occured please try again.')
          })
        }))
  }

  // deleteproduct(id: number):Observable<void>{
  //   return this.httpclient.delete<void>(`${environment.apibaseurl}/products/${id}`)
  //   .pipe(retry(2),catchError((err)=>{
  //     return throwError(()=>{
  //       return new Error('Error occured please try again.')
  //     })
  //   }))
  //  }
}
// updateResponse(response: Response, reviewId: number): string {
//   return this.http.patch(`/assessing/api/reviews/update/${reviewId}`, response, this.httpOptions);
// }