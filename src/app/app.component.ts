import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './model/product';
import { ConfigService, ITableCol } from './service/config.service';
import { ProductService } from './service/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'str-angular-project001';
  myProduct: Product;
  productList$: Observable<Product[]> = this.ProductService.getAll();
  //listObservable: Observable<Product[]>; 
  cols: ITableCol[] = this.config.tableCols;
  
constructor(
  private ProductService: ProductService,
  private config: ConfigService
  
) {
  //this.listObservable = ProductService.getAll();

}

}
