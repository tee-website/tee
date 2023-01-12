import React from "react";
import DrawerComponent from "./drawer.component";
import NavItem from "./nav-item.component";
import { Box, SimpleGrid } from "@chakra-ui/react";

export default function SidebarComponent() {
  return (
    <>
      <DrawerComponent>
        <SimpleGrid gap={3} mt={20}>
          <NavItem color="black" link="#" label="Home" />
          <NavItem color="black" link="#" label="Packages" />
          <NavItem color="black" link="#" label="About Us" />
          <NavItem color="black" link="#" label="Contact Us" />
        </SimpleGrid>
      </DrawerComponent>
    </>
  );
}
