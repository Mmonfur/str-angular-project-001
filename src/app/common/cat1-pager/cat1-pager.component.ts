import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-cat1-pager',
  templateUrl: './cat1-pager.component.html',
  styleUrls: ['./cat1-pager.component.scss']
})
export class Cat1PagerComponent implements OnInit {

  productList$: Observable<Product[]> = this.productService.getAll().pipe(
    map(products => products.filter(product=> product.featured===true && product.catId===1002))
  );

  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
  }

}
