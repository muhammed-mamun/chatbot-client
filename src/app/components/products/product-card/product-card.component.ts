import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PRODUCTS_DB } from '../../../core/db/products.db';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {

  @Input() product: any;
  @Output() passDataEvent = new EventEmitter();

  public ratings: Number[] = [1, 2, 3, 4, 5];

  public get cardClass() {
    console.log('isSelected:', this.product.isSelected);
    return this.product.isSelected ? 'selected-card' : 'card'; // Apply CSS classes based on isSelected
  }

  public handleClick(){
    console.log('Emiting data from ', this.product.title);
    this.passDataEvent.emit(this.product);
   
  };

  @Output() addToCart = new EventEmitter<any>();

    // Method to handle the add to cart action
    onAddToCart() {
      this.addToCart.emit(this.product); // Emit the product object
    }
}