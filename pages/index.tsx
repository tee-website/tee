import type { NextPage } from "next";
import {
  Box,
  Text,
  Heading,
  SimpleGrid,
  Center,
  Divider,
  HStack,
} from "@chakra-ui/react";

import * as Park from "@icon-park/react";
import { ContactFormComponent, AboutMeComponent } from "../components";
import { Phone } from "@icon-park/react";
import HomeLayout from "../layout/index.layout";
import PackageContainer from "../components/package-component";

import React from "react";

export default function Home({ data }: { data: any }) {
  console.log(data);
  return (
    <>
      <HomeLayout>
        <Box position={"relative"}>
          <Center
            borderRadius={5}
            w={20}
            h={20}
            top={-10}
            left={{ base: 10, md: 60 }}
            transform={"rotate(45deg)"}
            bg={"gray.100"}
            position={"absolute"}
            boxShadow={"lg"}
            zIndex={"banner"}
          >
            <Box transform={"rotate(-45deg)"}>
              <Park.Down size={32} />
            </Box>
          </Center>

          <Box
            position={"relative"}
            py={{ base: 10, md: 20 }}
            px={{ base: 10, md: 40, lg: 60 }}
            bg={"gray.100"}
            boxShadow={"xl"}
          >
            <PackageContainer />
            <Divider my={5} />
            <AboutMeComponent />
          </Box>
        </Box>

        <Box bg={"blackAlpha.900"} py={10} px={{ base: 10, md: 40, lg: 60 }}>
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={5}>
            <ContactFormComponent />

            <Center>
              <Box>
                <Text color={"white"}>Contact Information</Text>
                <Heading size={"lg"} color={"white"}>
                  Nadine Henry-Thomas
                </Heading>
                <Text color={"yellow"} fontWeight={"bold"}>
                  {"AHA CPR Instructor".toUpperCase()}
                </Text>

                <HStack as={"a"}>
                  <Phone />
                  <Text fontWeight={"bold"} color={"white"}>
                    Contact: +1 (443) 414-0807
                  </Text>
                </HStack>
              </Box>
            </Center>
          </SimpleGrid>
        </Box>
      </HomeLayout>
    </>
  );
}

export const getServerSideProps = async () => {
  return {
    props: { data: {} },
  };
};
