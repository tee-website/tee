import { HStack, Box, Image, Button, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { ContactModel } from '../contact-modal/contact-modal'

export type NavbarProps = {}

export default function NavbarComponent() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box
      position={'absolute'}
      top={{ base: 0, md: 10 }}
      left={{ base: 0, md: 20, lg: 40 }}
      right={{ base: 0, md: 20, lg: 40 }}
      px={{ base: 5, md: 5, lg: 10 }}
      py={4}
      zIndex={'banner'}
    >
      <HStack justifyContent={'space-between'}>
        <Box as="a" href="#">
          <Image src={'./logo.png'} alt={'TEE logo'} h={8} />
        </Box>

        <HStack justifyContent={'space-around'}>
          <Button
            data-group
            borderRadius={'full'}
            px={5}
            transition={'0.25s'}
            _hover={{
              background: 'green.400',
              color: 'white',
            }}
            colorScheme="whiteAlpha"
            fontWeight={'medium'}
            onClick={onOpen}
          >
            {'Contact Us'}
          </Button>
        </HStack>
      </HStack>
      <ContactModel isOpen={isOpen} onClose={onClose} />
    </Box>
  )
}
