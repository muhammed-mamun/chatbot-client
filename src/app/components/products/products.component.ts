import { Component } from '@angular/core';
import { ProductCardComponent } from './product-card/product-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductCardComponent, CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products = [
    {
      photo: "/assets/images/products/p1.png",
      price: 19.99,
      discountPrice: 15.99,
      title: "Bollard lamp"
    },
    {
      photo: "/assets/images/products/p2.png",
      price: 29.99,
      discountPrice: 24.99,
      title: "wall lamp"
    },
    {
      photo: "/assets/images/products/p3.png",
      price: 39.99,
      discountPrice: 31.99,
      title: "Diesel V2 Hoodie"
    },
    {
      photo: "/assets/images/products/p4.png",
      price: 49.99,
      discountPrice: 44.99,
      title: "Diesel V2 Hoodie"
    },
    {
      photo: "/assets/images/products/p5.png",
      price: 59.99,
      discountPrice: 54.99,
      title: "Product 5"
    },
    {
      photo: "/assets/images/products/p6.png",
      price: 69.99,
      discountPrice: 62.99,
      title: "Product 6"
    },
    {
      photo: "/assets/images/products/p7.png",
      price: 79.99,
      discountPrice: 74.99,
      title: "Round neck T-shirt"
    },
    {
      photo: "/assets/images/products/p8.png",
      price: 89.99,
      discountPrice: 84.99,
      title: "Product 8"
    }
  ];
}
