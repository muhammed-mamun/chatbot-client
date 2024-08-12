import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() product: any;
  public ratings: Number[] = [1, 2, 3, 4, 5];

  @Output() addToCart = new EventEmitter<any>();

    // Method to handle the add to cart action
    onAddToCart() {
      this.addToCart.emit(this.product); // Emit the product object
    }
}