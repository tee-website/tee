import { Box, Divider, Image, Text, Heading } from "@chakra-ui/react";
import React from "react";

import { ScrollMenu } from "react-horizontal-scrolling-menu";

export function Instructor() {
  return (
    <Box bg={"white"} mx={2}>
      <Box h={60} bg={"blackAlpha.300"} overflow={"hidden"}>
        <Image
          objectPosition={"center"}
          w={"full"}
          alt=""
          src="https://images.pexels.com/photos/6802398/pexels-photo-6802398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </Box>
      <Box p={5}>
        <Text fontWeight={"medium"}>Instructor Name</Text>
        <Text color={"yellow.400"}>Instructor credentials</Text>

        <Divider my={2} />

        <Text fontWeight={"light"} color={"lightblue"} fontStyle={"italic"}>
          instructor.name@email.com
        </Text>
      </Box>
    </Box>
  );
}

export default function InstructorContainer() {
  return (
    <Box py={10} px={5} color={"gray.600"} bg={"whitesmoke"} h={"full"}>
      <Heading my={5}>Instructors</Heading>
      <ScrollMenu>
        <Instructor />
        <Instructor />
        <Instructor />
        <Instructor />
      </ScrollMenu>
    </Box>
  );
}
