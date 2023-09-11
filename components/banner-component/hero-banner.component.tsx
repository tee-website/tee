import React from 'react'
import { Box, Heading, Stack } from '@chakra-ui/react'
import { useContent } from '../../providers/content.context'
import { urlFor } from '../../lib/client'

export default function HeroBanner() {
  const { banner } = useContent()
  return (
    <Box position={'relative'}>
      <Box h={'65vh'} bg={'blackAlpha.500'}>
        <Stack
          color={'white'}
          px={{ base: 10, md: 20, lg: 40 }}
          h={'full'}
          flexDir={'column'}
          justifyContent={'center'}
          w={{ base: '100%', md: '100%', lg: '60%' }}
        >
          <Heading size={'2xl'} fontWeight={'light'}>
            {banner?.small_text}
          </Heading>
          <Heading fontWeight={'bold'} size={'2xl'}>
            {banner?.bold_text}
          </Heading>
        </Stack>
      </Box>

      <Box
        zIndex={-1}
        bg={`url('${banner ? urlFor(banner?.background) : ''}')`}
        bgSize={'cover'}
        bgPosition={'center'}
        position={'absolute'}
        top={0}
        bottom={0}
        left={0}
        right={0}
      ></Box>
    </Box>
  )
}
