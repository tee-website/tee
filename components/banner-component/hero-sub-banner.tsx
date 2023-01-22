import React from "react";
import { useContent } from "../../providers/content.context";
import { Box, Center, Heading, SimpleGrid, Text } from "@chakra-ui/react";

export function BannerPoint({ data }: { data: any }) {
  return (
    <>
      <Center
        position={"relative"}
        color={"white"}
        flexDirection={"column"}
        justifyContent={"left"}
      >
        <Heading
          color={"green.800"}
          fontWeight={"medium"}
          size={"md"}
          textTransform={"uppercase"}
        >
          {data.title}
        </Heading>
        <Text
          fontSize={"lg"}
          mb={5}
          textAlign={"center"}
          w={{ base: "80%", md: "90%" }}
        >
          {data.content}
        </Text>
      </Center>
    </>
  );
}

export default function HeroSubBanner() {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const [responsiveHeight, setResponsiveHeight] = React.useState(0);

  const { banner } = useContent();

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
          <SimpleGrid
            gap={2}
            columns={{ base: 1, md: 2, lg: 2, xl: 4 }}
            justifyContent={"center"}
            alignContent={"center"}
          >
            {banner && banner?.pointers ? (
              banner.pointers.map((pointer: any) => {
                return <BannerPoint key={pointer._key} data={pointer} />;
              })
            ) : (
              <></>
            )}
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
}
