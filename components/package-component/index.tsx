import React from "react";

import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import PackageComponent from "../package-component/package.component";
import { Stack } from "@chakra-ui/react";
import { useContent } from "../../providers/content.context";

export default function PackageContainer() {
  const { offerings, package_banner } = useContent();

  return (
    <Box>
      <Grid
        bg={`url('${"https://images.pexels.com/photos/6520083/pexels-photo-6520083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}')`}
        bgPosition={"center"}
        templateColumns={"repeat(12,1fr)"}
        templateRows={"repeat(12,1fr)"}
        boxShadow={"lg"}
      >
        <GridItem
          bg={"blackAlpha.400"}
          color={"white"}
          p={5}
          colSpan={{ base: 12, lg: 8 }}
          rowSpan={12}
        >
          <Stack
            flexDirection={"column"}
            justifyContent={"center"}
            py={10}
            w={{ base: "full", md: "50%" }}
          >
            <Heading fontWeight={"light"} size={"lg"}>
              {package_banner?.title}
            </Heading>
            <Text>{package_banner?.content}</Text>
            <Box mt={5} bg={"green.500"} h={1} w={"20%"} />
          </Stack>
        </GridItem>
        <GridItem colSpan={{ base: 12, lg: 4 }} rowSpan={12}>
          <SimpleGrid columns={1}>
            {offerings.map((_package) => (
              <PackageComponent key={_package._key} data={_package} />
            ))}
          </SimpleGrid>
        </GridItem>
      </Grid>
    </Box>
  );
}
