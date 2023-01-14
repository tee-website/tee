import React from "react";

import Head from "next/head";
import NavbarComponent from "../components/nav-component/nav-bar.component";
import HeroBanner from "../components/banner-component/hero-banner.component";

import { Box, Center, Text } from "@chakra-ui/react";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <title>TTEE - The Total Educational Experience</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavbarComponent />

      {children}

      <Box as={"footer"} bg={"black"} p={5}>
        <Center>
          <Text color={"gray.500"}>
            All Rights Reserved by The Total Educational Experience ©2022
          </Text>
        </Center>
      </Box>
    </>
  );
}
