import {
  Box,
  Heading,
  List,
  ListIcon,
  ListItem,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";
import { useContent } from "../../providers/content.context";

import { PortableText } from "@portabletext/react";

export default function AboutComponent() {
  const { about } = useContent();
  return (
    <>
      <Box
        py={10}
        px={5}
        bg={"whitesmoke"}
        color={"gray.600"}
        h={"full"}
        display={"flex"}
        alignItems={"center"}
      >
        <Box>
          <Heading my={10}>{about?.title ?? ""}</Heading>

          <Box>
            <PortableText
              value={about?.content ?? []}
              components={{
                list: {
                  bullet: ({ children }) => (
                    <SimpleGrid mt={5} columns={2} pl={5}>
                      {children}
                    </SimpleGrid>
                  ),
                  number: ({ children }) => <Box pl={10}>{children}</Box>,
                },
              }}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}
