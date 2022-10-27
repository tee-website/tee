import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { NextComponentType } from "next";
const AboutMeComponent: NextComponentType = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 1, lg: 2 }} spacing={5}>
      <Box>
        <Heading mb={10} size={"md"}>
          ABOUT JOEL
        </Heading>
        <Heading size={"3xl"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Heading>
      </Box>
      <Box display={"flex"} alignItems={"center"}>
        <Box>
          <Box mt={5} bg={"red.500"} h={1} w={"20%"} />
          <Text py={2}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse id
            incidunt perferendis voluptas, impedit non placeat eveniet libero.
            Quae maiores reiciendis, explicabo non optio pariatur! Architecto
            libero aliquid cum est quis dolores. Dicta voluptas officiis ipsum,
            similique aspernatur enim eveniet.
          </Text>
          <Text py={2}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            recusandae, ea voluptatibus odio nesciunt maxime assumenda eaque
            vitae labore! Architecto, ab fuga, reiciendis eveniet ut alias,
            minus culpa harum error voluptatibus aut quas doloribus. Sint?
          </Text>
        </Box>
      </Box>
    </SimpleGrid>
  );
};

export default AboutMeComponent;
