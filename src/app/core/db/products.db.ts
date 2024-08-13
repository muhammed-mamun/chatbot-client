import { Product } from "../interface/product.interface";

export const PRODUCTS_DB: Product[] = [
  {
    id:0,
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/2018_Tesla_Model_S_75D.jpg/420px-2018_Tesla_Model_S_75D.jpg',
    price: 19.99,
    discountPrice: 15.99,
    title: 'Bollard lamp',
    tags: [],
    discount: 20,
    ratings: 5,
    isSelected: false,
  },
  {
    id:1,
    photo: '/assets/images/products/p2.png',
    price: 29.99,
    discountPrice: 24.99,
    title: 'wall lamp',
    tags: ['Run', 'Dress'],
    discount: 20,
    ratings: 3,
    isSelected: false,
  },
  {
    id:2,
    photo: '/assets/images/products/p3.png',
    price: 39.99,
    discountPrice: 31.99,
    title: 'Diesel V2 Hoodie',
    tags: ['Run', 'Dress'],
    discount: 20,
    ratings: 4,
    isSelected: false,
  },
  {
    id:3,
    photo: '/assets/images/products/p4.png',
    price: 49.99,
    discountPrice: 44.99,
    title: 'Diesel V2 Hoodie',
    tags: ['Run', 'Dress'],
    discount: 20,
    ratings: 3,
    isSelected: false,
  },
  {
    id:4,
    photo: '/assets/images/products/p5.png',
    price: 59.99,
    discountPrice: 54.99,
    title: 'Product 5',
    tags: ['Run', 'Dress'],
    discount: 20,
    ratings: 3,
    isSelected: false,
  },
  {
    id:5,
    photo: '/assets/images/products/p6.png',
    price: 69.99,
    discountPrice: 62.99,
    title: 'Product 6',
    tags: [],
    discount: 0,
    ratings: 2,
    isSelected: false,
  },
  {
    id:6,
    photo: '/assets/images/products/p7.png',
    price: 79.99,
    discountPrice: 74.99,
    title: 'Round neck T-shirt',
    tags: ['Run', 'Dress'],
    discount: 20,
    ratings: 2,
    isSelected: false,
  },
  {
    id:7,
    photo: '/assets/images/products/p8.png',
    price: 89.99,
    discountPrice: 84.99,
    title: 'Product 8',
    tags: ['Run', 'Dress'],
    discount: 0,
    isSelected: false,
  },
];