import { HStack, Box, Image } from '@chakra-ui/react'
import React from 'react'
import NavItem from './nav-item.component'

export type NavbarProps = {}

export default function NavbarComponent() {
  return (
    <Box
      position={'absolute'}
      top={{ base: 0, md: 10 }}
      left={{ base: 0, md: 20, lg: 40 }}
      right={{ base: 0, md: 20, lg: 40 }}
      px={{ base: 5, md: 5, lg: 10 }}
      py={4}
      bg={'whiteAlpha.900'}
      boxShadow={'lg'}
      zIndex={'banner'}
    >
      <HStack justifyContent={'space-between'}>
        <Box>
          <Image src={'./logo.png'} alt={'TEE logo'} h={8} />
        </Box>

        <HStack
          justifyContent={'space-around'}
          // display={{ base: "none", sm: "none", md: "flex" }}
        >
          <NavItem link={'#contact'} label="Contact Us" />
        </HStack>

        {/* <Box display={{ base: "unset", sm: "unset", md: "none" }}>
          <SidebarComponent />
        </Box> */}
      </HStack>
    </Box>
  )
}
