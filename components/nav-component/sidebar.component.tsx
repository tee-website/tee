import React from "react";
import DrawerComponent from "./drawer.component";
import NavItem from "./nav-item.component";
import { SimpleGrid } from "@chakra-ui/react";

export default function SidebarComponent() {
  return (
    <>
      <DrawerComponent>
        <SimpleGrid gap={3} mt={20}>
          <NavItem color="black" link="#contact" label="Contact Us" />
        </SimpleGrid>
      </DrawerComponent>
    </>
  );
}
