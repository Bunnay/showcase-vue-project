declare module "product" {
  import type { Category } from "category";

  export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: Category | null;
    images: string[];
  }

  export interface CreateProduct {
    title: string;
    price: number;
    description: string;
    categoryId: number | null;
    images: string[];
  }

  export interface UpdateProduct {
    title: string;
    price: number;
    description: string;
    images: string[];
  }
}
