import { Component, Input, OnInit } from '@angular/core';
import { randomFillSync } from 'crypto';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-pager',
  templateUrl: './product-pager.component.html',
  styleUrls: ['./product-pager.component.scss']
})
export class ProductPagerComponent implements OnInit {

  productList$: Observable<Product[]> = this.productService.getAll().pipe(
    map(products => products.filter(product=> product.featured===true))
  );

  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
  }

}
