import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-data-editor',
  templateUrl: './data-editor.component.html',
  styleUrls: ['./data-editor.component.scss']
})
export class DataEditorComponent implements OnInit {
  
  @Input() product: Product[] = [];
  

  constructor() { }

  columns = ["Id","Name","Description", "Price", "Stock"];
  index = ["id", "name", "description", "price", "stock"];

  

  
  @Output() delProduct: EventEmitter<Product[]> = new EventEmitter();
  currentProduct: Product = new Product();

  

  @Output() selectClick: EventEmitter<Product[]> = new EventEmitter();
  @Output() updateClick: EventEmitter<Product[]> = new EventEmitter();
  @Output() deleteClick: EventEmitter<Product[]> = new EventEmitter();


  ngOnInit(): void {
    this.ProductService.getProducts().subscribe
    (
      (response)=>
      {
        this.product = response;
      },
      (error) => console.log(error)
    )
  }
  
  
  onSelectButtonClick(product:Product ): void {
    this.selectClick.emit(product);
  }

  onUpdateButtonClick(product:Product): void {
    this.updateClick.emit(product);
  }
  
  onDeleteButtonClick(product:Product ): void {
    this.deleteClick.emit(product);
  }

  onSelectProduct(product: Product): void {
    this.currentProduct = product;
  }

  onDeleteProduct(product: Product): void {
    this.delProduct.emit(product);
    this.currentProduct = new Product();
  }

  


}


