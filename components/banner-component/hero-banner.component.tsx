import React from "react";
import { Box, Button, HStack, Heading } from "@chakra-ui/react";

export default function HeroBanner() {
  return (
    <Box position={"relative"}>
      <Box
        h={"60vh"}
        display={"flex"}
        justifyContent={"left"}
        alignItems={"center"}
        bg={"blackAlpha.600"}
      >
        <Box px={{ base: 10, md: 40, lg: 60 }}>
          <Heading my={5} color={"white"}>
            {" "}
            The Total <br />
            <Box as={"span"} color={"green.600"}>
              {" "}
              Educational Experience
            </Box>
          </Heading>

          <HStack>
            <Button>Contact Us</Button>
          </HStack>
        </Box>
      </Box>

      <Box
        zIndex={-1}
        bg={`url('${"https://images.unsplash.com/photo-1622115297822-a3798fdbe1f6?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974"}')`}
        objectFit={"cover"}
        objectPosition={"center"}
        position={"absolute"}
        top={0}
        bottom={0}
        left={0}
        right={0}
      ></Box>
    </Box>
  );
}
