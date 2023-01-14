import { Textarea } from "@chakra-ui/react";
import React from "react";
import { useFormContext } from "./provider/form.context";

export default function LongTextComponent({ name }: { name: string }) {
  const { getField, changeEvent } = useFormContext();

  const field = getField(name);
  return (
    <Textarea
      name={field.name}
      placeholder={field.placeholder}
      value={field.fieldValue}
      onChange={(e) =>
        changeEvent(() => {
          return field.update(e.target.value);
        })
      }
    ></Textarea>
  );
}
