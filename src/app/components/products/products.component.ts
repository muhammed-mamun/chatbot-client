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

  public likes: number = 0;

  public handleClick(data?: any){
    console.log('Data from child is', data);
    this.likes += 1;
  }
  
  public products: Product[] = PRODUCTS_DB;
}
