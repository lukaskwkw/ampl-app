import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ProductWhereInput = {
  id?: StringFilter;
  price?: FloatNullableFilter;
  name?: StringNullableFilter;
  quantity?: IntNullableFilter;
  description?: StringNullableFilter;
};
