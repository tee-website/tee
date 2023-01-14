import React from "react";
import { FormContext } from "./form.context";

import FormComponent from "../form.component";
export const useFormRender = (value: FormContext) => {
  return {
    render: (
      <FormContext.Provider value={value}>
        <FormComponent />
      </FormContext.Provider>
    ),
  };
};
