import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

    constructor(
      private http: HttpClient
    ) { }

    getAll(): Observable

  getFeatured(randomized?: boolean) : Product [] {
    const featured = this. list.filter (item => item. featured);
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

