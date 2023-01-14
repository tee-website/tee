import React from "react";
import ControlForm from "./control.component";
import InputComponent from "./input.component";
import { useFormContext } from "./provider/form.context";
import LongTextComponent from "./long-text.component";

export default function FieldComponent({ name }: { name: string }) {
  const { getField } = useFormContext();
  const field = getField(name);

  switch (field.type) {
    case "text":
    case "email":
    case "number":
    case "date":
    case "datetime":
    case "password":
      return (
        <ControlForm name={name}>
          <InputComponent name={name} />
        </ControlForm>
      );

    case "select":
      return <></>;

    case "long":
      return (
        <ControlForm name={name}>
          <LongTextComponent name={name} />
        </ControlForm>
      );

    default:
      return <></>;
  }
}
