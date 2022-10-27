import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import * as Park from "@icon-park/react";

import { NextComponentType } from "next";
import SkillComponent from "./skill.component";
const SkillSectionComponent: NextComponentType = () => {
  return (
    <SimpleGrid columns={1}>
      <SimpleGrid columns={{ base: 1, lg: 2 }}>
        <Box py={10} pr={10}>
          <Heading mb={5} size={"md"}>
            My Skills
          </Heading>
          <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>

          <Box mt={5} bg={"red.500"} h={1} w={"20%"} />
        </Box>

        <SimpleGrid columns={{ base: 2, md: 2, lg: 2 }}>
          <SkillComponent
            skill={"Teamwork"}
            icon={<Park.Connect size={48} />}
            image_url={
              "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
            }
          />
          <SkillComponent
            skill={"Critical Thinking"}
            icon={<Park.Tips size={48} />}
            image_url={
              "https://images.unsplash.com/photo-1463171379579-3fdfb86d6285?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            }
          />
        </SimpleGrid>
      </SimpleGrid>

      <SimpleGrid  columns={{ base: 2, md: 2, lg: 4 }}>
        <SkillComponent
          skill={"Coding & Debugging"}
          icon={<Park.Code size={48} />}
          image_url={
            "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
          }
        />

        <SkillComponent
          skill={"Problem Solving"}
          icon={<Park.GlassesThree size={48} />}
          image_url={
            "https://images.unsplash.com/photo-1463171379579-3fdfb86d6285?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          }
        />

        <SkillComponent
          skill={"Creativity"}
          icon={<Park.Star size={48} />}
          image_url={
            "https://images.unsplash.com/photo-1463171379579-3fdfb86d6285?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          }
        />

        <SkillComponent
          skill={"Communication"}
          icon={<Park.MessageOne size={48} />}
          image_url={
            "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          }
        />
      </SimpleGrid>
    </SimpleGrid>
  );
};

export default SkillSectionComponent;
