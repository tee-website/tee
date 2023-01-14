import React from "react";
import { useForm } from "../form/provider/form.hook";
import { text, email, long } from "../form/provider/form.service";
import { Box, Stack, SimpleGrid, Heading } from "@chakra-ui/react";

export default function ContactComponent() {
  const { render } = useForm({
    numberOfRows: 4,
    schema: {
      name: text().row(1).placeholder("Your Name").label("your name"),
      email: email()
        .row(2)
        .validate((v) => v.email("Please provide a valid email address"))
        .label("Email")
        .placeholder("email"),
      mobile: text().row(3).label("Mobile").placeholder("mobile"),
      message: long()
        .row(4)
        .label("Message")
        .placeholder("start typing message here..."),
    },
  });
  return (
    <SimpleGrid boxShadow={"xl"} mb={10} columns={{ base: 1, md: 2, lg: 2 }}>
      <Box border={"InactiveBorder"} bg={"whitesmoke"} p={10}>
        <Heading fontWeight={"light"} color={"green"} size={"xl"}>
          Apply now
        </Heading>
        <Heading fontWeight={"medium"} size={"2xl"}>
          Contact us
        </Heading>
        <Box mt={5} bg={"green.500"} h={1} w={"60%"} mb={10} />
        {render}
      </Box>

      <Box
        h={"full"}
        w={"full"}
        bg={`url('${"https://images.pexels.com/photos/11655091/pexels-photo-11655091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}')`}
        bgSize={"cover"}
        bgPosition={"center"}
        p={49}
        display={{ base: "none", md: "unset" }}
      />
    </SimpleGrid>
  );
}
