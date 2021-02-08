import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-cat2-pager',
  templateUrl: './cat2-pager.component.html',
  styleUrls: ['./cat2-pager.component.scss']
})
export class Cat2PagerComponent implements OnInit {

  productList$: Observable<Product[]> = this.productService.getAll().pipe(
    map(products => products.filter(product=> product.featured===true && product.catId===1001))
  );

  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
  }

}
