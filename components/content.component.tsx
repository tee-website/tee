import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  Stack,
  Grid,
  GridItem,
} from "@chakra-ui/react";

import React from "react";

export function Content() {
  return (
    <Stack flexDirection={"column"} alignItems={"center"}>
      <Box
        bg={`url('${"https://images.pexels.com/photos/11655091/pexels-photo-11655091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}')`}
        bgSize={"cover"}
        bgPosition={"center"}
        borderRadius={"full"}
        h={40}
        w={40}
        overflow={"hidden"}
      />
      <Heading size={"md"} fontWeight={"medium"}>
        Lorem, ipsum dolor
      </Heading>
      <Text textAlign={"center"} w={{ base: "70%", md: "80%" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quod
        modi neque.
      </Text>
    </Stack>
  );
}

export default function ContentComponent() {
  return (
    <Grid
      templateColumns={"repeat(12, 1fr)"}
      templateRows={"repeat(12,1fr)"}
      gap={5}
      py={20}
    >
      <GridItem colSpan={{ base: 12, md: 3 }} rowSpan={12}>
        <Stack flexDirection={"column"} justifyContent={"center"} h={"full"}>
          <Heading fontWeight={"light"} color={"green"} size={"xl"}>
            Get Certified Today
          </Heading>
          <Heading fontWeight={"medium"} size={"2xl"}>
            BLS Certification
          </Heading>
          <Box mt={5} bg={"green.500"} h={1} w={"60%"} />
        </Stack>
      </GridItem>

      <GridItem colSpan={{ base: 12, md: 9 }} rowSpan={12}>
        <SimpleGrid columns={{ base: 1, md: 3 }}>
          <Content />
          <Content />
          <Content />
        </SimpleGrid>
      </GridItem>
    </Grid>
  );
}
