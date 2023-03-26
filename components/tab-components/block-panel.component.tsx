import {
  Box,
  Heading,
  Text,
  ListItem,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react'
import React from 'react'
import { TabPanelType } from '../package-component/package-modal.component'
import { PortableText } from '@portabletext/react'

export default function BlockPanelComponent({
  content,
}: {
  content: { name: string; type: TabPanelType; data: any }
}) {
  return (
    <Box p={5}>
      <PortableText
        value={content?.data ?? []}
        components={{
          list: {
            bullet: ({ children }) => (
              <Box my={2} ml={5}>
                <UnorderedList>{children}</UnorderedList>
              </Box>
            ),

            number: ({ children }) => (
              <Box my={2} ml={5}>
                <OrderedList>{children}</OrderedList>
              </Box>
            ),
          },

          listItem: {
            bullet: ({ children }) => <ListItem>{children}</ListItem>,
          },

          block: {
            h1: ({ children }) => (
              <Heading my={3} fontWeight={'medium'} size={'4xl'}>
                {children}
              </Heading>
            ),

            h2: ({ children }) => (
              <Heading my={3} fontWeight={'medium'} size={'xl'}>
                {children}
              </Heading>
            ),

            h3: ({ children }) => (
              <Heading my={3} fontWeight={'medium'} size={'lg'}>
                {children}
              </Heading>
            ),

            h4: ({ children }) => (
              <Heading my={3} fontWeight={'medium'} size={'md'}>
                {children}
              </Heading>
            ),

            h5: ({ children }) => (
              <Heading my={3} fontWeight={'semibold'} size={'md'}>
                {children}
              </Heading>
            ),

            h6: ({ children }) => (
              <Heading my={3} fontWeight={'medium'} size={'md'}>
                {children}
              </Heading>
            ),

            p: ({ children }) => <Text my={2}>{children}</Text>,
          },
        }}
      />
    </Box>
  )
}
