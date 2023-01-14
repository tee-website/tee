import React from "react";
import { useFormContext } from "./provider/form.context";
import { PasswordField } from "./provider/form.service";
import {
  FormControl,
  FormLabel,
  InputGroup,
  InputAddon,
  FormErrorMessage,
  FormHelperText,
  IconButton,
} from "@chakra-ui/react";

export interface ControlProps {
  children: React.ReactNode;
  name: string;
}

export default function ControlForm({ name, children }: ControlProps) {
  const { getField, changeEvent } = useFormContext();
  let field = getField(name);
  return (
    <FormControl
      isReadOnly={field.readonly}
      isRequired={false}
      isDisabled={false}
      my={2}
      isInvalid={field.isInvalid}
    >
      {field.label ? <FormLabel>{field.label}</FormLabel> : <></>}

      <InputGroup>
        {/* {addOn && addOnPos === "before" ? (
          <InputAddon>{addOn}</InputAddon>
        ) : (
          <></>
        )} */}

        {children}

        <InputAddon gap={2} background={"transparent"} border={"none"}>
          {field.type === "password" ? (
            <IconButton
              aria-label={"toggle visibility"}
              onClick={() =>
                changeEvent(
                  () => (field as PasswordField).toggleVisibility(),
                  [],
                  false
                )
              }
              icon={
                (field as PasswordField).fieldType === "password" ? (
                  <>{"show"}</>
                ) : (
                  <>{"hide"}</>
                )
              }
            />
          ) : (
            <></>
          )}

          {field.isEditable ? (
            <IconButton
              aria-label={"edit field"}
              icon={<>{field.readonly ? "edit" : "close"}</>}
              onClick={() =>
                !field.isDerived
                  ? changeEvent(() => field.toggleReadOnly(), [], false)
                  : null
              }
            />
          ) : (
            <></>
          )}
        </InputAddon>

        {/* {addOn && addOnPos === "after" ? <InputAddon></InputAddon> : <></>} */}
      </InputGroup>

      {field.isInvalid && field.error ? (
        <FormErrorMessage>{field.error.message}</FormErrorMessage>
      ) : (
        <></>
      )}

      {field.helper ? (
        <FormHelperText>
          <>{field.helper}</>
        </FormHelperText>
      ) : (
        <></>
      )}
    </FormControl>
  );
}
