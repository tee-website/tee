import React from "react";
import { Box, Button, HStack, Heading, Stack, Text } from "@chakra-ui/react";
import { useContent } from "../../providers/content.context";

export function HeroBannerItem() {
  return (
    <>
      <Box px={{ base: 10, md: 40, lg: 60 }}>
        <Heading fontWeight={"medium"} my={5} color={"white"}>
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
    </>
  );
}

export default function HeroBanner() {
  const { banner } = useContent();
  console.log(banner);
  return (
    <Box position={"relative"}>
      <Box h={"65vh"} bg={"blackAlpha.500"}>
        <Stack
          color={"white"}
          px={{ base: 10, md: 20, lg: 40 }}
          h={"full"}
          flexDir={"column"}
          justifyContent={"center"}
          w={{ base: "100%", md: "100%", lg: "60%" }}
        >
          <Heading size={"3xl"} fontWeight={"light"}>
            We always offer
          </Heading>
          <Heading fontWeight={"bold"} size={"3xl"}>
            The Total Educational Experience
          </Heading>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            inventore hic, pariatur eligendi laboriosam, delectus tempora vero
            laborum voluptatibus suscipit odit rem quibusdam nostrum! Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Pariatur error
            asperiores laudantium!
          </Text>
        </Stack>
      </Box>

      <Box
        zIndex={-1}
        bg={`url('${"https://images.unsplash.com/photo-1622115297822-a3798fdbe1f6?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974"}')`}
        bgSize={"cover"}
        bgPosition={"center"}
        position={"absolute"}
        top={0}
        bottom={0}
        left={0}
        right={0}
      ></Box>
    </Box>
  );
}
