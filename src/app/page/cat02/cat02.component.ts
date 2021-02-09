import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Base } from 'src/app/controller/base';
import { Product } from 'src/app/model/product';
import { ConfigService, IHeadline } from 'src/app/service/config.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-cat02',
  templateUrl: './cat02.component.html',
  styleUrls: ['./cat02.component.scss']
})
export class Cat02Component extends Base implements OnInit {

  lines: IHeadline[] = this.config.headlines;
  productList$: Observable<Product[]> = this.productService.getAll().pipe(
    map(products => products.filter(product=> product.catId===1001))
  );

  constructor(
    public productService: ProductService,
    private config: ConfigService,
    ) {
      super(productService);
    }

  ngOnInit(): void {
  }

}
