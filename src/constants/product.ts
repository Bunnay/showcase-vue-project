import type { Product, CreateProduct, UpdateProduct } from "product";

export const DEFAULT_TASK_DATA: Product = {
  title: "",
  price: 0,
  description: "",
  category: null,
  images: [],
};

export const DEFAULT_CREATE_PRODUCT: CreateProduct = {
  title: "",
  price: 0,
  description: "",
  categoryId: null,
  images: [],
};

export const DEFAULT_UPDATE_PRODUCT: UpdateProduct = {
  title: "",
  price: 0,
  description: "",
  images: [],
};
