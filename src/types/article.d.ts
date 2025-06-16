import { type Product } from './product';

export type ArticleItem = {
  title: string;
  slug: string;
  description: string;
  content: string;
  products: Product[];
  tag: string[];
  category: string;
  date: string;
  createdAt: string;
  id: string;
}

export type Article = {
  items: ArticleItem[];
}