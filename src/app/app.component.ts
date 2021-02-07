import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './model/product';
import { ProductService } from './service/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'str-angular-project001';
  myProduct: Product;
  //productList$: Observable<Product[]> = this.ProductService.getAll();
  listObservable: Observable<Product[]>; 

constructor(
  private ProductService: ProductService,
  
) {
  this.listObservable = ProductService.getAll();


  this.ProductService.getAll().forEach( value => {
    console.log("First Product:", value);
  });

  this.ProductService.getOne(1).forEach( value => {
    console.log("First Product:", value);
  });

  this.ProductService.add({id:51 , catId:2 ,name: 'fostalicska' , description:'valami', price: 100, image:'', stock: 88 , featured: false, active:false}).forEach( value => {
    console.log("Added Product:", value);
  });

  this.ProductService.update({id:11 , catId:2 ,name: 'fostalicska' , description:'valami', price: 100, image:'', stock: 88 , featured: false, active:false}).forEach( value => {
    console.log("Updated Product:", value);
  });

  this.ProductService.remove(2).forEach( value => {
    console.log("Deleted Product:", value);
  });





}

}
