import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  itemPrice?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  idCategoryId?: SortOrder;
  name?: SortOrder;
  selledPrice?: SortOrder;
  quantity?: SortOrder;
  updatedAt?: SortOrder;
};
