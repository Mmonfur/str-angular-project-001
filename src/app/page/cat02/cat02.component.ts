import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category';
import { Product } from 'src/app/model/product';
import { CategoryService } from 'src/app/service/category.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-cat02',
  templateUrl: './cat02.component.html',
  styleUrls: ['./cat02.component.scss']
})
export class Cat02Component implements OnInit {

  category: Category = this.categoryService.list[1];
  productList: Product[] = this.productService.list;

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
  }

  onDelProduct(product: Product): void {
    this.productService.removeProduct(product);
  }

}
