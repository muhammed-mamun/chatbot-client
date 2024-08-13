import { Component, Input } from '@angular/core';
import { ProductCardComponent } from './product-card/product-card.component';
import { CommonModule } from '@angular/common';
import { Product } from '../../core/interface/product.interface';
import { PRODUCTS_DB } from '../../core/db/products.db';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductCardComponent, CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {


  public totalPrice: number = 0;
  public selectedProducts: Product[] = [];

  public handleClick(data?: any){
    console.log('Data from child is', data);
    const existingProductIndex = this.selectedProducts.findIndex(p => p.id === data.id);
    if (existingProductIndex === -1) {
      this.selectedProducts.push(data);
      this.totalPrice += data.price;
      console.log("Selected Products: ", this.selectedProducts);
    } else {
      this.selectedProducts.splice(existingProductIndex, 1);
      this.totalPrice -= data.price;
      console.log("Selected Products: ", this.selectedProducts);
    }

  }
  
  public products: Product[] = PRODUCTS_DB;
}
