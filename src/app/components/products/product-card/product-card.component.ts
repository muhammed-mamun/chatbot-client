import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  public handleClick(){
    console.log('Emiting data from ', this.product.title);
    this.passDataEvent.emit(this.product);
  };

  // ngOnInit(){
  //   console.log('Hello init');
  //   console.log(PRODUCTS_DB);
    
  // }
}