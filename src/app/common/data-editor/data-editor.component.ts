import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  
  ProductService: any;
  

  constructor() { 
    
  }

  ngOnInit(): void {
  }

  onUpdate(product:Product): void {
    this.ProductService.update(product).subscribe(
      updatedProduct => console.log(updatedProduct)
      
    );
  }

  onDelete(product:Product): void {
    this.ProductService.remove(product).subscribe(
      () => console.log('deleted')
    );
  }
  
  onSelectProduct(product: Product): void {
    this.ProductService.select(product).subscribe(
      () => console.log('selected')
    );
  }


}


