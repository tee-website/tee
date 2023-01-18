import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import PackageLabelComponent from "./package-label.component";
import PackageModal from "./package-modal.component";

export type PackageProps = {
  data: {
    name: string;
  };
};

export default function PackageComponent({ data }: PackageProps) {
  const { onOpen, onClose, isOpen } = useDisclosure();
  return (
    <>
      <PackageLabelComponent packageName={data?.name} onOpen={onOpen} />
      <Modal
        size={{ base: "full", lg: "6xl" }}
        onClose={onClose}
        isOpen={isOpen}
      >
        <ModalOverlay />
        <ModalContent
          position={"fixed"}
          top={{ base: 0, lg: 0 }}
          bottom={{ base: 0, lg: 0 }}
          borderRadius={0}
          height={{ base: "unset", lg: "90vh" }}
          overflow={"hidden"}
        >
          <ModalCloseButton
            zIndex={"sticky"}
            position={"absolute"}
            top={5}
            right={5}
          />
          <PackageModal data={data} />
        </ModalContent>
      </Modal>
    </>
  );
}
