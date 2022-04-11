import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { OrderUpdateManyWithoutProductsInput } from "./OrderUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  itemPrice?: number | null;
  description?: string | null;
  idCategory?: CategoryWhereUniqueInput | null;
  name?: string | null;
  orders?: OrderUpdateManyWithoutProductsInput;
  selledPrice?: number | null;
  quantity?: number | null;
};
