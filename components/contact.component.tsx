import {
  Box,
  Button,
  Heading,
  Input,
  InputGroup,
  Textarea,
} from "@chakra-ui/react";

import React from "react";
import { useForm } from "./form/provider/form.hook";
import { text, email } from "./form/provider/form.service";

export default function ContactComponent() {
  const { render } = useForm({
    numberOfRows: 4,
    schema: {
      firstName: text().row(1).placeholder("First Name"),
      lastName: text().row(1).placeholder("Last Name"),
      email: email().row(2).placeholder("Enter Email"),
      mobile: text().row(3).placeholder("Mobile"),
    },
  });
  return (
    <Box>
      <Heading color={"white"}>Get In Touch</Heading>
      {render}
      <Box display={"flex"} w={"full"} justifyContent={"right"}>
        <Button borderRadius={0} variant={"outline"} color={"white"}>
          Send
        </Button>
      </Box>
    </Box>
  );
}
