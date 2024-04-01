import React from 'react'

import { useBoolean, Button, Box, Text } from '@chakra-ui/react'

import Slide from 'react-reveal/Slide'

export type PackageProps = {
  onOpen: any
  packageName: string
}

export default function PackageLabelComponent({
  onOpen,
  packageName,
}: PackageProps) {
  return (
    <Box
      overflow={'hidden'}
      position={'relative'}
      _hover={{ cursor: 'pointer' }}
      w={'full'}
    >
      <Box
        onClick={onOpen}
        h={40}
        bg={'blackAlpha.700'}
        p={5}
        color={'white'}
        transition={'.25s'}
        _hover={{
          bg: 'blackAlpha.900',
          color: 'green.400',
        }}
      >
        <Text fontWeight={'bold'} fontSize={'lg'}>
          {packageName}
        </Text>
        <Box position={'absolute'} bottom={5} right={5}>
          <Button variant={'link'} colorScheme={'whiteAlpha'}>
            Find out more
          </Button>
        </Box>
      </Box>
    </Box>
  )
}
