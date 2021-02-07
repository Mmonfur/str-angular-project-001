import { HttpClient } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl: string = 'http://localhost:3000/product';
  list: Product[];

    constructor(
      private http: HttpClient
    ) { }

    getAll(): Observable<Product[]>{
      return this.http.get<Product[]>(this.apiUrl);
    }

    getOne(id: string | number): Observable<Product[]>{
      return this.http.get<Product[]>(`${this.apiUrl}/${id}`);
    }

    add(product: Product): Observable<any>{
      return this.http.post<Observable<any>>(this.apiUrl, product);
    }

    update(product:Product): Observable<any>{
      return this.http.put(`${this.apiUrl}/${product.id}`, product);
    }

    remove(product:any): Observable<any>{
      product = product.id ? product.id : product;
      return this.http.delete(`${this.apiUrl}/${product}`);
    }




  getFeatured(randomized?: boolean) : Product [] {
    const featured = this.list.filter (item => item. featured);
    return randomized ? this.randomize(featured) : featured;
  }  

  randomize( sourceArray: Product[]): Product[] {
    return sourceArray.sort( () => Math.random() - 0.5);
  }
  
  removeProduct (product: Product):void {
    const index = this.list.findIndex( item => item.id === product.id);
    this.list.splice(index, 1);
  }
}

