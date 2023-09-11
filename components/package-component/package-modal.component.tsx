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
} from '@chakra-ui/react'
import React from 'react'
import BlockPanelComponent from '../tab-components/block-panel.component'
import TablePanelComponent from '../tab-components/table-panel.component'
import { useState, useEffect } from 'react'
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
      color={'gray.500'}
      justifyContent={'left'}
      py={4}
      px={7}
    >
      <Text fontSize={'lg'}>{name}</Text>
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
      return (
        <Box px={10} py={2}>
          <BlockPanelComponent content={content} />
        </Box>
      )

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
        <Box h={'full'}>
          <Tabs h={'full'}>
            <TabList
              borderRightWidth={'1px'}
              borderRightColor={'green.400'}
              overflowY={'hidden'}
            >
              {content.map((content) => {
                return <TabComponent key={content.key} name={content.name} />
              })}
            </TabList>

            <TabPanels h={'full'} overflowY={'scroll'} pb={10}>
              {content.map((content) => (
                <TabPanel py={10} key={content.key}>
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
