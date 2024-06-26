import React from 'react'

import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  Grid,
  GridItem,
  HStack,
} from '@chakra-ui/react'
import PackageComponent from '../package-component/package.component'
import { Stack } from '@chakra-ui/react'
import { useContent } from '../../providers/content.context'

export default function PackageContainer() {
  const { offerings, package_banner } = useContent()

  return (
    <Box>
      <Grid
        bg={`url('${'https://images.pexels.com/photos/6520083/pexels-photo-6520083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}')`}
        bgPosition={'center'}
        bgSize={'cover'}
        bgRepeat={'no-repeat'}
        templateColumns={'repeat(12,1fr)'}
        templateRows={'repeat(12,1fr)'}
        boxShadow={'lg'}
      >
        <GridItem
          bg={'blackAlpha.400'}
          color={'white'}
          p={5}
          colSpan={{ base: 12 }}
          rowSpan={12}
        >
          <Stack
            flexDirection={'column'}
            justifyContent={'center'}
            py={10}
            w={{ base: 'full', md: '70%' }}
          >
            <Heading fontWeight={'light'} size={'lg'}>
              {package_banner?.title}
            </Heading>
            <Text>{package_banner?.content}</Text>
            <Box mt={5} bg={'green.500'} h={1} w={'20%'} />
          </Stack>
        </GridItem>
        <GridItem colSpan={{ base: 12 }} rowSpan={12}>
          <Stack
            direction={{ base: 'column', md: 'row' }}
            justifyContent={'space-evenly'}
            gap={0}
          >
            {offerings.map((_package) => (
              <PackageComponent key={_package._id} data={_package} />
            ))}
          </Stack>
        </GridItem>
      </Grid>
    </Box>
  )
}
