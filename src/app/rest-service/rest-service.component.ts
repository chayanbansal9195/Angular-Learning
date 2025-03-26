import { Component } from '@angular/core';
import { ProductsService } from '../service/products.service';

@Component({
  selector: 'app-rest-service',
  imports: [],
  templateUrl: './rest-service.component.html',
  styleUrl: './rest-service.component.css',
})
export class RestServiceComponent {
  productList:any
  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.productsService.getProductList().subscribe((data: any) => {
      this.productList=data.products
    });
  }
}
