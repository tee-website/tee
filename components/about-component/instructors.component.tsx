import { Box, Divider, Image, Text, Heading, Flex } from '@chakra-ui/react'
import React from 'react'

import { ScrollMenu } from 'react-horizontal-scrolling-menu'
import { useContent } from '../../providers/content.context'
import { urlFor } from '../../lib/client'
import { isArray } from 'lodash'

export function Instructor({ instructor }: any) {
  return (
    <Box data-group mx={2} maxWidth={'250px'}>
      <Box borderRadius={5} h={60} bg={'blackAlpha.400'} overflow={'hidden'}>
        {instructor.image ? (
          <Image alt={instructor.name} src={urlFor(instructor.image)} />
        ) : (
          <></>
        )}
      </Box>
      <Box pt={5}>
        <Text fontWeight={'medium'}>{instructor?.name}</Text>
        {isArray(instructor.credentials) &&
        instructor.credentials.length > 0 ? (
          <Flex gap={1}>
            {instructor.credentials.map((credential: string, index: number) => (
              <Box
                key={index}
                fontSize={'10px'}
                py={1}
                px={2}
                borderRadius={5}
                bg={'blackAlpha.100'}
                color={'green'}
                whiteSpace={'nowrap'}
                fontWeight={'medium'}
              >
                {credential}
              </Box>
            ))}
          </Flex>
        ) : (
          <></>
        )}

        <Divider my={0.5} />

        <Text
          as={'a'}
          href={`mailto: ${instructor.email}`}
          fontWeight={'medium'}
          color={'blue.500'}
          fontSize={'xs'}
          fontStyle={'italic'}
        >
          {instructor?.email}
        </Text>
      </Box>
    </Box>
  )
}

export default function InstructorContainer() {
  const { instructors } = useContent()
  return (
    <Box py={10} px={5} color={'gray.600'} h={'full'}>
      <Heading my={5}>Our Team</Heading>
      <ScrollMenu>
        {instructors.map((instructor) => (
          <Instructor key={instructor._id} instructor={instructor} />
        ))}
      </ScrollMenu>
    </Box>
  )
}
