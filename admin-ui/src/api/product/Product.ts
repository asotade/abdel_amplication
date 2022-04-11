import { Category } from "../category/Category";
import { Order } from "../order/Order";

export type Product = {
  itemPrice: number | null;
  createdAt: Date;
  description: string | null;
  id: string;
  idCategory?: Category | null;
  name: string | null;
  orders?: Array<Order>;
  selledPrice: number | null;
  quantity: number | null;
  updatedAt: Date;
};
