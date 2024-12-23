export type ProductItem = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: ProductItemRating;
};

export type ProductItemRating = {
  rate: number;
  count: number;
};
