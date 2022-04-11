import { ProductCreateNestedManyWithoutCategoriesInput } from "./ProductCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  products?: ProductCreateNestedManyWithoutCategoriesInput;
  title?: string | null;
};
