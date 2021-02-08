import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ConfigService, ITableCol } from 'src/app/service/config.service';
import { ProductService } from 'src/app/service/product.service';


@Component({
  selector: 'app-data-editor',
  templateUrl: './data-editor.component.html',
  styleUrls: ['./data-editor.component.scss']
})
export class DataEditorComponent implements OnInit {

  @Input() product: Product[] = [];
  @Input() icon: string = 'fa-pen';
  @Input() btnClass: string = 'btn-info';
  @Input() text: string = '';

  /**
   * @var cols {ITableCol[]} - a táblázat oszlopai a ConfigService -ből.
   */
  cols: ITableCol[] = this.config.tableCols;

  /**
   * @var productList$ {Observable<Product[]>} - a termékeket szolgáltató Observable.
   */
  productList$: Observable<Product[]> = this.productService.getAll();


  /**
   *
   * @param productService {ProductService} - a termékek szolgáltatása
   * @param config {ConfigService} - a beállítások szolgáltatása
   */
  constructor(
    private productService: ProductService,
    private config: ConfigService,
  ) {

  }

  ngOnInit(): void {
  }

  onUpdate(product: Product): void {
    this.productService.update(product).subscribe(
      updatedProduct => console.log(updatedProduct)

    );
  }

  onDelete(product: Product): void {
    this.productService.remove(product).subscribe(
      () => console.log('deleted')
    );
  }

}


