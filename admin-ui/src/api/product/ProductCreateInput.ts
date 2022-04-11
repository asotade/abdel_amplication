import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { OrderCreateNestedManyWithoutProductsInput } from "./OrderCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  itemPrice?: number | null;
  description?: string | null;
  idCategory?: CategoryWhereUniqueInput | null;
  name?: string | null;
  orders?: OrderCreateNestedManyWithoutProductsInput;
  selledPrice?: number | null;
  quantity?: number | null;
};
