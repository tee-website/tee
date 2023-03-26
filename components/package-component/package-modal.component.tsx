import {
  Heading,
  Box,
  Tab,
  TabList,
  Tabs,
  TabPanel,
  TabPanels,
  Divider,
  Text,
  Collapse,
} from '@chakra-ui/react'
import React from 'react'
import BlockPanelComponent from '../tab-components/block-panel.component'
import TablePanelComponent from '../tab-components/table-panel.component'
import { useState, useEffect } from 'react'
import { ApplicationMenu, CloseOne } from '@icon-park/react'
import { useDisclosure, IconButton } from '@chakra-ui/react'
export type TabPanelType = 'block' | 'table'

export function TabComponent({ name }: { name: string }) {
  return (
    <Tab
      border={'none'}
      _active={{
        color: 'white',
      }}
      _focus={{
        color: 'white',
      }}
      _selected={{
        color: 'white',
        bg: 'green.400',
      }}
      justifyContent={'left'}
      py={5}
      px={10}
    >
      <Text fontSize={'lg'} fontWeight={'medium'}>
        {name}
      </Text>
    </Tab>
  )
}

export function TabPanelComponent({
  content,
}: {
  content: { name: string; type: TabPanelType; data: any }
}) {
  switch (content.type) {
    case 'block':
      return <BlockPanelComponent content={content} />

    case 'table':
      return <TablePanelComponent content={content} />
  }
}

function serialize(
  modalContent: any[],
): { name: string; type: TabPanelType; data: any; key: string }[] {
  let result = modalContent.map((tabContent) => {
    if (tabContent._type === 'content')
      return {
        type: 'block',
        data: tabContent.content,
        name: tabContent?.title,
        key: tabContent?._key,
      }

    if (tabContent._type === 'table')
      return {
        name: tabContent?.title,
        type: 'table',
        data: tabContent.content.map((content: any) => [
          content.heading,
          content.content,
        ]),
        key: tabContent?._key,
      }

    return null
  })

  result = result
    .filter((content) => content !== null)
    .filter((content) => {
      if (content?.type !== 'table') return true
      return content.data
    })

  return result as {
    name: string
    type: TabPanelType
    data: any
    key: string
  }[]
}

export default function PackageModal({ data }: { data: any }) {
  const [content, setContent] = useState(serialize(data?.modal ?? []))

  const { isOpen, onToggle } = useDisclosure()

  useEffect(() => {
    setContent(serialize(data?.modal ?? []))
  }, [data])

  return (
    <>
      <Box
        py={5}
        px={5}
        position={'absolute'}
        top={0}
        left={0}
        right={0}
        bg={'blackAlpha.200'}
      >
        <Heading size={'lg'} fontWeight={'medium'} color={'green.600'}>
          {data.name}
        </Heading>
      </Box>

      <Divider color={'green.400'} mt={70} />
      <>
        <Box h={'full'} overflowY={'scroll'}>
          <Tabs orientation={'vertical'} h={'full'} position={'relative'}>
            <IconButton
              top={10}
              right={10}
              zIndex={'banner'}
              cursor={'pointer'}
              position={'absolute'}
              borderRadius={'full'}
              bg={'blackAlpha.800'}
              colorScheme={'green'}
              onClick={onToggle}
              size={'lg'}
              icon={
                isOpen ? <CloseOne size={32} /> : <ApplicationMenu size={32} />
              }
              aria-label={''}
            />

            <Collapse in={isOpen}>
              <Box
                position={'absolute'}
                top={0}
                bottom={0}
                bg={'whiteAlpha.900'}
                h={'full'}
                backdropFilter={'blur(5px)'}
              >
                <TabList
                  borderRightWidth={'1px'}
                  borderRightColor={'green.400'}
                  h={'full'}
                  overflowY={'hidden'}
                >
                  {content.map((content) => {
                    return (
                      <TabComponent key={content.key} name={content.name} />
                    )
                  })}
                </TabList>
              </Box>
            </Collapse>

            <TabPanels>
              {content.map((content) => (
                <TabPanel key={content.key}>
                  <Heading
                    ml={5}
                    color={'green.400'}
                    size={'lg'}
                    fontWeight={'medium'}
                  >
                    {content.name}
                  </Heading>
                  <Divider my={5} />

                  <TabPanelComponent content={content} />
                </TabPanel>
              ))}
            </TabPanels>
          </Tabs>
        </Box>
      </>
    </>
  )
}
