export interface Product {
  photo: string;
  title: string;
  price: number;
  discountPrice: number;
  tags: string[];
  discount: number;
  ratings?: number;
}
