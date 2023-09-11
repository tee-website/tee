import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react'
import ContactComponent from '../contact-component/contact.component'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => any
}

export function ContactModel({ isOpen, onClose }: ContactModalProps) {
  return (
    <>
      <Modal size={'5xl'} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />

        <ModalContent pt={10}>
          <ModalCloseButton colorScheme="whiteAlpha" borderRadius={'full'} />

          <ModalBody>
            <ContactComponent />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
