import React from "react";

import { useBoolean } from "@chakra-ui/react";
import { Center, Box, VStack, Text } from "@chakra-ui/react";

import Fade from "react-reveal/Fade";

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
      onClick={onOpen}
      overflow={"hidden"}
      position={"relative"}
      _hover={{ cursor: "pointer" }}
    >
      <Fade left opposite when={!show}>
        <Center
          borderColor={"gray.200"}
          borderWidth={"thin"}
          bg={"white"}
          p={10}
          h={"full"}
        >
          <VStack gap={2} textColor={"green.500"} textAlign={"center"}>
            {icon}
            <Text color={"gray.500"} fontWeight={"medium"} fontSize={"sm"}>
              {packageName}
            </Text>
          </VStack>
        </Center>
      </Fade>

      <Box
        top={0}
        bottom={0}
        left={0}
        right={0}
        position={"absolute"}
        onMouseEnter={toggle}
        onMouseLeave={off}
      >
        <Fade left opposite when={show}>
          <Box bg={`url('${image}')`} backgroundSize={"cover"}>
            <Center
              borderColor={"gray.200"}
              borderWidth={"thin"}
              p={10}
              bg={"blackAlpha.700"}
              h={"full"}
            >
              <VStack gap={2} textColor={"white"} textAlign={"center"}>
                {icon}
                <Text
                  color={"whiteAlpha.800"}
                  fontWeight={"medium"}
                  fontSize={"sm"}
                >
                  {packageName}
                </Text>
              </VStack>
            </Center>
          </Box>
        </Fade>
      </Box>
    </Box>
  );
}
