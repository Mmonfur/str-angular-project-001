import { Component, OnInit } from '@angular/core';
import { Base } from 'src/app/controller/base';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-cat01',
  templateUrl: './cat01.component.html',
  styleUrls: ['./cat01.component.scss']
})
export class Cat01Component extends Base implements OnInit {

  productList: Product[] = this.productService.list;

  constructor(
    public productService: ProductService,
    ) {
      super(productService);
    }

  ngOnInit(): void {
  }

}
