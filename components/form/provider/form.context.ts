import { createContext, useContext } from "react";
import { Field } from "./form.service";

export type FormContextType = {
  data: { [key: string]: any };
  fields: Field[];
  options: { rows: number };
  getField: (name: string) => Field;
  changeEvent: (
    event: () => Field,
    stack?: string[],
    allowTrigger?: boolean
  ) => void;
  submitEvent: (event: React.FormEvent<HTMLFormElement>) => void;
};

export type options = { value: string; label: string };

export const FormContext = createContext<FormContextType | undefined>(
  undefined
);

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) throw new Error("Form context is required");
  return context;
};
