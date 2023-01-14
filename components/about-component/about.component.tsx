import {
  Box,
  Heading,
  List,
  ListIcon,
  ListItem,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";

export default function AboutComponent() {
  return (
    <>
      <Box
        py={10}
        px={5}
        bg={"whitesmoke"}
        color={"gray.600"}
        h={"full"}
        display={"flex"}
        alignItems={"center"}
      >
        <Box>
          <Heading my={10}>About Us</Heading>
          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim
            deleniti commodi nesciunt nostrum sint eveniet sequi impedit
            aperiam, facere id omnis saepe praesentium eum repellat itaque
            quaerat quod modi iure quae quibusdam? Adipisci expedita itaque!
          </Text>

          <SimpleGrid columns={2} mt={4}>
            <Text>Lorem ipsum dolor sit.</Text>
            <Text>Lorem ipsum dolor sit.</Text>
            <Text>Lorem ipsum dolor sit.</Text>
            <Text>Lorem ipsum dolor sit.</Text>
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
}
