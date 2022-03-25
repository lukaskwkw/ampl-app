import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const ProductCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="Price" source="price" />
        <TextInput label="Name" source="name" />
        <NumberInput step={1} label="Quantity" source="quantity" />
        <TextInput label="Description" multiline source="description" />
      </SimpleForm>
    </Create>
  );
};
