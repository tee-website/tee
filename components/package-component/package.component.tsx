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
  packageName: string;
  image: string;
  icon: React.ReactNode;
};

export default function PackageComponent({
  packageName,
  image,
  icon,
}: PackageProps) {
  const { onOpen, onClose, isOpen } = useDisclosure();
  return (
    <>
      <PackageLabelComponent
        packageName={packageName}
        image={image}
        icon={icon}
        onOpen={onOpen}
      />
      <Modal size={"6xl"} onClose={onClose} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent borderRadius={0}>
          <ModalCloseButton />
          <PackageModal />
        </ModalContent>
      </Modal>
    </>
  );
}
