import React from "react";

import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { Connect, User } from "@icon-park/react";
import PackageComponent from "../package-component/package.component";
import { client } from "../../lib/client";

export default function PackageContainer() {
  return (
    <SimpleGrid columns={1}>
      <SimpleGrid columns={{ base: 1, lg: 2 }}>
        <Box py={10} pr={10}>
          <Heading mb={5} size={"lg"}>
            Packages Offered
          </Heading>
          <Text>
            It is important that you are comfortable while {`${"you're "}`}
            enrolled in our program, and so, we offer two packages for
            prospective students to choose what compliments them best.
          </Text>

          <Box mt={5} bg={"green.500"} h={1} w={"20%"} />
        </Box>

        <SimpleGrid columns={{ base: 2, md: 2, lg: 2 }}>
          <PackageComponent
            packageName="Group Package"
            icon={<Connect size={48} />}
            image={
              "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
            }
          />

          <PackageComponent
            packageName="One-on-One Package"
            icon={<User size={48} />}
            image={
              "https://images.unsplash.com/photo-1463171379579-3fdfb86d6285?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            }
          />
        </SimpleGrid>
      </SimpleGrid>
    </SimpleGrid>
  );
}
