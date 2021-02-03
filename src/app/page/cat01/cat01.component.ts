import { Component, OnInit } from '@angular/core';
import { Base } from 'src/app/controller/base';
import { Category } from 'src/app/model/category';
import { Product } from 'src/app/model/product';
import { CategoryService } from 'src/app/service/category.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-cat01',
  templateUrl: './cat01.component.html',
  styleUrls: ['./cat01.component.scss']
})
export class Cat01Component extends Base implements OnInit {

  productList: Product[] = this.productService.list;
  category: Category = this.categoryService.list[0];

  constructor(
    public productService: ProductService,
    public categoryService: CategoryService,
    ) {
      super(productService);
    }

  ngOnInit(): void {
  }

}
