import React from "react";
import { useFormContext } from "./provider/form.context";
import { Input } from "@chakra-ui/react";

export default function InputComponent({ name }: { name: string }) {
  const { getField, changeEvent } = useFormContext();

  const field = getField(name);

  return (
    <Input
      color={"white"}
      type={field.fieldType}
      name={field.name}
      placeholder={field.placeholder}
      borderRadius={0}
      onChange={(e) =>
        changeEvent(() => {
          return field.update(e.target.value);
        })
      }
      value={field.fieldValue}
    />
  );
}
