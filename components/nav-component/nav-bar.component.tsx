import { HStack, Heading, Box, IconButton, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import NavItem from "./nav-item.component";
import SidebarComponent from "./sidebar.component";

export type NavbarProps = {};

export default function NavbarComponent() {
  return (
    <Box
      position={"absolute"}
      top={{ base: 0, md: 10 }}
      left={{ base: 0, md: 20, lg: 40 }}
      right={{ base: 0, md: 20, lg: 40 }}
      px={{ base: 5, md: 5, lg: 10 }}
      py={2}
      bg={"whiteAlpha.700"}
      boxShadow={"lg"}
      zIndex={"banner"}
    >
      <HStack justifyContent={"space-between"}>
        <Box>
          <Heading color="green.500"> TEE </Heading>
        </Box>

        <HStack
          justifyContent={"space-around"}
          display={{ sm: "none", md: "flex" }}
        >
          <SimpleGrid columns={4} gap={2}>
            <NavItem link={"#"} label="Home" />
            <NavItem link={"#"} label="Packages" />
            <NavItem link={"#"} label="About Us" />
            <NavItem link={"#"} label="Contact Us" />
          </SimpleGrid>
        </HStack>

        <Box display={{ sm: "unset", md: "none" }}>
          <SidebarComponent />
        </Box>
      </HStack>
    </Box>
  );
}
