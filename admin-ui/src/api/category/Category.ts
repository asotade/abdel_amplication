import { Product } from "../product/Product";

export type Category = {
  createdAt: Date;
  id: string;
  products?: Array<Product>;
  title: string | null;
  updatedAt: Date;
};
