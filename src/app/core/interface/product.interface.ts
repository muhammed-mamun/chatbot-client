export interface Product {
  id:number,
  photo: string;
  title: string;
  price: number;
  discountPrice: number;
  tags: string[];
  discount: number;
  ratings?: number;
  isSelected: boolean,
}
