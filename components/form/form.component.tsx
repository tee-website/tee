import React from "react";
import { useFormContext } from "./provider/form.context";
import FieldComponent from "./field.component";
import { HStack, SimpleGrid, Button } from "@chakra-ui/react";
import { Field } from "./provider/form.service";

export default function FormComponent() {
  const {
    fields,
    options: { rows },
    submitEvent,
  } = useFormContext();

  return (
    <form onSubmit={submitEvent}>
      {Array.from(Array(rows).keys()).map((val) => {
        const rowNumber = val + 1;
        let content: Field[];

        content = fields.filter((field) => field.row === rowNumber);

        return (
          <SimpleGrid key={val} gap={1} columns={{ sm: 1, md: content.length }}>
            {content.map((field) => {
              return <FieldComponent name={field.name} key={field.name} />;
            })}
          </SimpleGrid>
        );
      })}
    </form>
  );
}
