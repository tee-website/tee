import React from "react";
import { FormContext } from "./form.context";

import FormComponent from "../form.component";
export const useFormRender = (value: any) => {
  return {
    render: (
      <FormContext.Provider value={value}>
        <FormComponent />
      </FormContext.Provider>
    ),
  };
};
