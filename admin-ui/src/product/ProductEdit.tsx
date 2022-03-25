import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const ProductEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="Price" source="price" />
        <TextInput label="Name" source="name" />
        <NumberInput step={1} label="Quantity" source="quantity" />
        <TextInput label="Description" multiline source="description" />
      </SimpleForm>
    </Edit>
  );
};
