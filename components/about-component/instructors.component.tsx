import {
  Box,
  Divider,
  Image,
  Text,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";

import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { useContent } from "../../providers/content.context";
import { urlFor } from "../../lib/client";
import { isArray } from "lodash";

export function Instructor({ instructor }: any) {
  return (
    <Box bg={"white"} mx={2} maxWidth={"250px"}>
      <Box h={60} bg={"blackAlpha.400"} overflow={"hidden"}>
        {instructor.image ? (
          <Image alt={instructor.name} src={urlFor(instructor.image)} />
        ) : (
          <></>
        )}
      </Box>
      <Box p={5}>
        <Text fontWeight={"medium"}>{instructor?.name}</Text>
        {isArray(instructor.credentials) &&
        instructor.credentials.length > 0 ? (
          <Text color={"yellow.600"} noOfLines={1}>
            {instructor.credentials.map((credential: string, index: number) => (
              <span key={index}>
                {credential}
                {"  "}{" "}
              </span>
            ))}
          </Text>
        ) : (
          <></>
        )}

        <Divider my={2} />

        <Text
          as={"a"}
          href={`mailto: ${instructor.email}`}
          fontWeight={"light"}
          color={"blue.500"}
          fontStyle={"italic"}
        >
          {instructor?.email}
        </Text>
      </Box>
    </Box>
  );
}

export default function InstructorContainer() {
  const { instructors } = useContent();
  return (
    <Box py={10} px={5} color={"gray.600"} bg={"whitesmoke"} h={"full"}>
      <Heading my={5}>Our Team</Heading>
      <ScrollMenu>
        {/* <SimpleGrid
          columns={instructors.length < 4 ? 4 : instructors.length}
          gap={2}
        > */}
        {instructors.map((instructor) => (
          <Instructor key={instructor._id} instructor={instructor} />
        ))}
        {/* </SimpleGrid> */}
      </ScrollMenu>
    </Box>
  );
}
