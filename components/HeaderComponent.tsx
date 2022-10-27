import { Box, HStack, Image, Text, Button, Heading } from "@chakra-ui/react";

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
              <Heading size={"xl"}>
                The Total{" "}
                <Box as="span" color="green.600">
                  Educational Experience
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
              <Button colorScheme={"green"} borderRadius={10}>
                BLS Certification
              </Button>
              <Button
                borderRadius={10}
                variant="outline"
                colorScheme={"whiteAlpha"}
              >
                Contact Us
              </Button>
            </HStack>
          </Box>
        </Box>

        <Box
          bg={`url('${"https://images.unsplash.com/photo-1622115297822-a3798fdbe1f6?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974"}')`}
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
        bg={"green.500"}
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
                  boxShadow={'lg'}
                >
                  <Image
                    w={"full"}
                    src={
                      "https://images.unsplash.com/photo-1606596556957-f6566cc865a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80"
                    }
                    alt={'Header Background'}
                  />
                </Box>
              </Box>
            </Box>

            <Box textAlign={{ base: "center", lg: "unset" }}>
              <Heading color={"white"}>Nadine Henry-Thomas</Heading>
              <Text fontWeight={'bold'}>{("AHA CPR Instructor").toUpperCase()}</Text>
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
