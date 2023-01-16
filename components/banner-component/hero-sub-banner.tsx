import React from "react";
import { LoveAndHelp, HealthProducts } from "@icon-park/react";
import { useContent } from "../../providers/content.context";
import {
  Box,
  Center,
  Divider,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

function IconCases({ icon }: { icon: number }) {
  switch (icon) {
    case 0:
      return (
        <LoveAndHelp
          theme="outline"
          size="72"
          strokeLinejoin="miter"
          strokeLinecap="butt"
        />
      );

    case 1:
      return (
        <HealthProducts
          theme="outline"
          size="72"
          strokeLinejoin="miter"
          strokeLinecap="butt"
        />
      );

    default:
      return (
        <HealthProducts
          theme="outline"
          size="72"
          strokeLinejoin="miter"
          strokeLinecap="butt"
        />
      );
  }
}

export function BannerPoint({ data }: { data: any }) {
  return (
    <>
      <Center
        position={"relative"}
        color={"white"}
        p={2}
        flexDirection={"column"}
        justifyContent={"left"}
      >
        <IconCases icon={data?.icon ?? 0} />

        <Heading fontWeight={"medium"} size={"md"}>
          {data.title}
        </Heading>
        <Text mb={5} textAlign={"center"} w={{ base: "70%", md: "80%" }}>
          {data.content}
        </Text>
        <Divider mx={5} position={"absolute"} bottom={0} bg={"white"} />
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
          <SimpleGrid gap={5} columns={{ base: 1, md: 2, lg: 2, xl: 4 }}>
            {banner && banner?.pointers ? (
              banner.pointers.map((pointer: any, index: number) => {
                return <BannerPoint key={pointer._id + index} data={pointer} />;
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
