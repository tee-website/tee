import React from "react";
import { LoveAndHelp, MedicalBox } from "@icon-park/react";
import {
  Box,
  Center,
  Divider,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

export function BannerPoint() {
  return (
    <>
      <Center
        color={"white"}
        p={2}
        flexDirection={"column"}
        justifyContent={"left"}
      >
        <LoveAndHelp
          theme="outline"
          size="72"
          strokeLinejoin="miter"
          strokeLinecap="butt"
        />
        <Heading fontWeight={"medium"} size={"md"}>
          Lorem Ipsum Dolor
        </Heading>
        <Text textAlign={"center"} w={{ base: "70%", md: "80%" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dolore
          voluptatem illum.
        </Text>
        <Divider mt={10} bg={"white"} />
      </Center>
    </>
  );
}

export default function HeroSubBanner() {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const [responsiveHeight, setResponsiveHeight] = React.useState(0);

  const handleResize = () => {
    const container = containerRef.current;
    if (container) {
      console.log(container.style.height);
      setResponsiveHeight(container.offsetHeight - 30);
    }
  };

  React.useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize, false);
  }, []);

  return (
    <>
      <Box position={"relative"} height={responsiveHeight}>
        <Box
          position={"absolute"}
          ref={containerRef}
          top={-20}
          left={{ base: 0, md: 10, lg: 40 }}
          right={{ base: 0, md: 10, lg: 40 }}
          zIndex={"banner"}
          bg={"green.400"}
          boxShadow={"lg"}
          p={10}
        >
          <SimpleGrid gap={5} columns={{ base: 1, md: 2, lg: 2, xl: 4 }}>
            <BannerPoint />

            <BannerPoint />

            <BannerPoint />

            <BannerPoint />
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
}
