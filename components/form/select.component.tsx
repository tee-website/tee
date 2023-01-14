import { Select } from "@chakra-ui/react";
import React from "react";

import { useFormContext } from "./provider/form.context";
import { SelectField } from "./provider/form.service";

export default function SelectComponent({ name }: { name: string }) {
  const { getField } = useFormContext();
  const field = getField(name) as SelectField;

  return (
    <Select>
      {(field.options ?? []).map(({ value, label }) => {
        return (
          <option key={value} value={value}>
            {label}
          </option>
        );
      })}
    </Select>
  );
}
