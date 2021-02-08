import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { IHeadline, ConfigService } from 'src/app/service/config.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input() products: Product[] = [];
  @Input() text: string = '';
  @Output() delProduct: EventEmitter<Product> = new EventEmitter();

  lines: IHeadline[] = this.config.headlines;
  productList$: Observable<Product[]> = this.productService.getAll();

  constructor(
    private productService: ProductService,
    private config: ConfigService,
  ) { }

  ngOnInit(): void {
  }

  onDeleteClick(product: Product): void {
    this.delProduct.emit(product);
  }

}
