import { Product } from '../model/product';
import { ProductService } from '../service/product.service';

export abstract class Base {

    constructor(
        public productService: ProductService,
    ) {}

    onDelProduct(product: Product): void {
        this.productService.removeProduct(product);
    }
}
