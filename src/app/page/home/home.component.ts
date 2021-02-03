import { Component, OnInit } from '@angular/core';
import { Base } from 'src/app/controller/base';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends Base implements OnInit {

  featuredProducts: Product[] = this.productService.getFeatured(true)
    .slice(0, 5);
    allProducts: Product[] = this.productService.list;
  
  constructor(
    public productService: ProductService,
  ) {
    super(productService);
  }
  
  ngOnInit(): void {
  }

}
