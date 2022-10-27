import { SimpleGrid, Heading, Center, Box } from "@chakra-ui/react";
import React from "react";

function ProjectComponent() {
  return (
    <Box bg={"blackAlpha.700"} py={10} px={{ base: 10, md: 40, lg: 60 }}>
      <SimpleGrid columns={{ base: 2, lg: 4 }}>
        <Box>
          <Heading size={"md"} color={"white"}>
            MY WORK
          </Heading>
          <Box mt={5} bg={"red.500"} h={1} w={"20%"} />
        </Box>
        <Center bg={"whiteAlpha.400"} p={10}>
          H
        </Center>
        <Center bg={"whiteAlpha.400"} p={10}>
          A
        </Center>
        <Center bg={"whiteAlpha.400"} p={10}>
          P
        </Center>
        <Center bg={"whiteAlpha.400"} p={10}>
          P
        </Center>
        <Center bg={"whiteAlpha.400"} p={10}>
          Y
        </Center>
      </SimpleGrid>
    </Box>
  );
}

export default ProjectComponent;
