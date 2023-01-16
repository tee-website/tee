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
import { useContent } from "../providers/content.context";
import { urlFor } from "../lib/client";

export function Content({ data }: { data: any }) {
  return (
    <Stack py={10} flexDirection={"column"} alignItems={"center"}>
      <Box
        bg={`url('${
          data.image
            ? urlFor(data.image)
            : "https://images.pexels.com/photos/11655091/pexels-photo-11655091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }')`}
        bgSize={"cover"}
        bgPosition={"center"}
        borderRadius={"full"}
        h={40}
        w={40}
        overflow={"hidden"}
      />
      <Heading size={"md"} fontWeight={"medium"}>
        {data.title}
      </Heading>
      <Text textAlign={"center"} w={{ base: "70%", md: "80%" }}>
        {data.content}
      </Text>
    </Stack>
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
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={5}>
            {content.map((item, index) => (
              <Content key={item._id + index} data={item} />
            ))}
          </SimpleGrid>
        </GridItem>
      </Grid>
    </Box>
  );
}
