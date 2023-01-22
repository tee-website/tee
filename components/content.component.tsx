import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  Stack,
  Grid,
  GridItem,
  HStack,
} from "@chakra-ui/react";

import React from "react";
import { useContent } from "../providers/content.context";

export function Content({ data }: { data: any }) {
  return (
    <HStack
      bg={"whitesmoke"}
      position={"relative"}
      justifyContent={"space-evenly"}
      width={"full"}
    >
      <Box
        borderBottomColor={"green.400"}
        borderBottomWidth={5}
        transition={".15s"}
        _hover={{
          borderTopColor: "green.400",
          borderTopWidth: 5,
          borderBottomColor: "none",
          borderBottomWidth: 0,
        }}
        backdropFilter={"blur(3px)"}
        p={10}
        textAlign={"left"}
        h={"full"}
      >
        <Heading color={"green.600"} mb={5} size={"md"} fontWeight={"medium"}>
          {data.title}
        </Heading>
        <Text
          transition={".5s"}
          color={"blackAlpha.700"}
          w={{ base: "80%", md: "90%" }}
        >
          {data.content}
        </Text>
      </Box>
    </HStack>
  );
}

export default function ContentComponent() {
  const { content } = useContent();
  return (
    <Box display={content.length === 0 ? "none" : "unset"}>
      <Grid
        templateColumns={"repeat(12, 1fr)"}
        templateRows={"repeat(12,1fr)"}
        gap={5}
        pb={10}
      >
        <GridItem colSpan={{ base: 12, lg: 3 }} rowSpan={12}>
          <Stack
            flexDirection={"column"}
            alignItems={{ base: "center", md: "unset" }}
            justifyContent={"center"}
            h={"full"}
          >
            <Heading fontWeight={"light"} color={"green"} size={"xl"}>
              Get Certified Today
            </Heading>
            <Heading fontWeight={"medium"} size={"2xl"}>
              BLS Certification
            </Heading>
            <Box mt={5} bg={"green.500"} h={1} w={"60%"} />
          </Stack>
        </GridItem>

        <GridItem colSpan={{ base: 12, lg: 9 }} rowSpan={12}>
          <SimpleGrid columns={{ base: 1, md: 1, lg: 3 }}>
            {content.map((item) => (
              <Content key={item._key} data={item} />
            ))}
          </SimpleGrid>
        </GridItem>
      </Grid>
    </Box>
  );
}
