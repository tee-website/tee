import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
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
      <Modal size={'6xl'} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />

        <ModalContent bg={'whitesmoke'} pt={10}>
          <ModalCloseButton colorScheme="whiteAlpha" borderRadius={'full'} />

          <ModalBody>
            <ContactComponent />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
