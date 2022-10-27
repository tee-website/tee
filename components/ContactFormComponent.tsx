import {
  Box,
  Button,
  Heading,
  Input,
  InputGroup,
  Textarea,
} from "@chakra-ui/react";
import { NextComponentType } from "next";

const ContactFormComponent: NextComponentType = () => {
  return (
    <Box>
      <Heading color={"white"}>Get In Touch</Heading>
      <Box as={"form"} py={10}>
        <InputGroup py={1}>
          <Input borderRadius={0} placeholder={"Name"} />
        </InputGroup>

        <InputGroup py={1}>
          <Input borderRadius={0} placeholder={"Enter email"} />
        </InputGroup>

        <InputGroup py={1}>
          <Textarea borderRadius={0} placeholder={"Your Message"} />
        </InputGroup>
      </Box>
      <Box display={"flex"} w={"full"} justifyContent={"right"}>
        <Button borderRadius={0} variant={"outline"} color={"white"}>
          Send
        </Button>
      </Box>
    </Box>
  );
};


export default ContactFormComponent;
