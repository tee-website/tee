import React from "react";

import {
  Divider,
  HStack,
  useBoolean,
  SimpleGrid,
  Button,
} from "@chakra-ui/react";
import { Center, Box, VStack, Text, Stack } from "@chakra-ui/react";

import Slide from "react-reveal/Slide";
import { Cardioelectric } from "@icon-park/react";

export type PackageProps = {
  onOpen: any;
  packageName: string;
  icon: React.ReactNode;
  image: string;
};

export default function PackageLabelComponent({
  onOpen,
  packageName,
  icon,
  image,
}: PackageProps) {
  const [show, { off, toggle }] = useBoolean(false);
  return (
    <Box
      overflow={"hidden"}
      position={"relative"}
      _hover={{ cursor: "pointer" }}
    >
      <Slide up when={!show}>
        <Box h={40} bg={"blackAlpha.800"} p={5} color={"white"}>
          <Text fontWeight={"bold"} fontSize={"lg"}>
            {packageName}
          </Text>
        </Box>
      </Slide>
      <Box
        top={0}
        bottom={0}
        left={0}
        right={0}
        position={"absolute"}
        onMouseEnter={toggle}
        onMouseLeave={off}
      >
        <Slide down when={show}>
          <Box h={40} bg={"green.400"} p={5} color={"white"}>
            <Text fontWeight={"bold"} fontSize={"lg"}>
              {packageName}
            </Text>
            <Box position={"absolute"} bottom={5} right={5}>
              <Button
                onClick={onOpen}
                variant={"link"}
                colorScheme={"whiteAlpha"}
              >
                Find out more
              </Button>
            </Box>
          </Box>
        </Slide>
      </Box>
    </Box>
  );
}
