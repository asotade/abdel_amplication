import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ProductWhereInput = {
  itemPrice?: FloatNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  idCategory?: CategoryWhereUniqueInput;
  name?: StringNullableFilter;
  orders?: OrderListRelationFilter;
  selledPrice?: FloatNullableFilter;
  quantity?: IntNullableFilter;
};
