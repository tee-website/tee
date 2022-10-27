import {
  Box,
  HStack,
  Image,
  Text,
  Button,
  Heading,
} from "@chakra-ui/react";

import type { NextComponentType } from "next";
import React from "react";
import NavigationComponent from "./NavigationComponent";

const HeaderComponent: NextComponentType = () => {
  return (
    <Box>
      <Box bg={"blackAlpha.700"} position="relative">
        <NavigationComponent />

        <Box
          h={"60vh"}
          display={"flex"}
          justifyContent={"left"}
          alignItems={"center"}
        >
          <Box py={{ base: 20, md: 40 }} px={{ base: 10, md: 40, lg: 60 }}>
            <Box fontSize={"6xl"} color={"white"}>
              <Heading>
                Hello, I'm{" "}
                <Box as="span" color="red">
                  Joel Henry
                </Box>
              </Heading>
            </Box>

            <Box w={"70%"} py={5}>
              <Text as="p" color={"white"}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                laudantium, neque obcaecati.
              </Text>
            </Box>

            <HStack>
              <Button borderRadius={0}>About Me</Button>
              <Button borderRadius={0} variant="outline" colorScheme={"red"}>
                Contact Me
              </Button>
            </HStack>
          </Box>
        </Box>

        <Box
          bg={`url('${"https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}')`}
          backgroundSize={"cover"}
          backgroundPosition={"center"}
          zIndex={-1}
          top={0}
          left={0}
          right={0}
          bottom={0}
          position={"absolute"}
        />
      </Box>

      <Box
        bg={"red.500"}
        pt={10}
        pb={20}
        px={{ base: 10, md: 40, lg: 60 }}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
         
        <Box>
          <Box
            display={{ base: "block", lg: "flex" }}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Box
              display={"flex"}
              justifyContent={"center"}
              py={5}
              pr={{ base: 0, lg: 20 }}
            >
              <Box borderRadius={"full"} bg={"white"} p={5} boxShadow={"xl"}>
                <Box
                  w={40}
                  h={40}
                  overflow={"hidden"}
                  display={"flex"}
                  justifyContent={"center"}
                  borderRadius={"full"}
                  alignItems={"center"}
                >
                  <Image
                    w={"full"}
                    src={
                      "https://images.unsplash.com/photo-1509305717900-84f40e786d82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHBvcnRyYWl0JTIwYmxhY2slMjBtZW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                    }
                  />
                </Box>
              </Box>
            </Box>

            <Box textAlign={{ base: "center", lg: "unset" }}>
              <Heading color={"white"}>Lorem ipsum dolor sit.</Heading>
              <Text color={"white"}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus et aliquid modi aperiam quo distinctio consequatur
                iusto beatae soluta perspiciatis!
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeaderComponent;
