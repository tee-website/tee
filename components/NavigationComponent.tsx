import { Box, HStack, IconButton, Image, Heading } from '@chakra-ui/react';
import type { NextComponentType } from "next";

import * as Park from "@icon-park/react";
import React from "react";

const NavigationComponent: NextComponentType = () => {
  return (
    <>
      <Box
        position={"absolute"}
        top={{ base: 0, md: 10 }}
        left={{ base: 0, md: 40, lg: 60 }}
        right={{ base: 0, md: 60 }}
        px={{ base: 5, md: 5, lg: 10 }}
        py={2}
        bg={"whiteAlpha.300"}
        rounded={{ base: 0, md: 10 }}
        boxShadow={"xl"}
      >
        <HStack justifyContent={"space-between"}>
          <Heading color={'white'}>TTEE</Heading>
          {/* <Image src={"/logo.png"} width={10} /> */}
          <HStack color={"white"}>
            <IconButton
              variant={"unstyled"}
              icon={<Park.MenuUnfold size={32} />}
              aria-label={"Menu"}
            />
          </HStack>
        </HStack>
      </Box>
    </>
  );
};

export default NavigationComponent;
