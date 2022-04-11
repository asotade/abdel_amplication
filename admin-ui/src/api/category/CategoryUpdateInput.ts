import { ProductUpdateManyWithoutCategoriesInput } from "./ProductUpdateManyWithoutCategoriesInput";

export type CategoryUpdateInput = {
  products?: ProductUpdateManyWithoutCategoriesInput;
  title?: string | null;
};
