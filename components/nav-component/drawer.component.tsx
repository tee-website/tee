import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { IconButton } from "@chakra-ui/react";

import { ApplicationMenu } from "@icon-park/react";

export interface DrawerComponentProps {
  children: React.ReactNode;
}

export default function DrawerComponent({ children }: DrawerComponentProps) {
  const { onOpen, onClose, isOpen, onToggle } = useDisclosure();
  return (
    <>
      <IconButton
        onClick={onOpen}
        variant={"ghost"}
        colorScheme={"whiteAlpha"}
        icon={<ApplicationMenu size={36} />}
        aria-label={"Menu"}
      />
      <Drawer onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>{children}</DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
