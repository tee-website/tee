import React from 'react'
import { TableContainer, Table, Tr, Tbody, Td, Text } from '@chakra-ui/react'
import { TabPanelType } from '../package-component/package-modal.component'
import BlockPanelComponent from './block-panel.component'

export default function TablePanelComponent({
  content,
}: {
  content: { name: string; type: TabPanelType; data: any }
}) {
  const { data } = content
  return (
    <TableContainer>
      <Table variant={'striped'} orientation="vertical">
        <Tbody>
          {data.map((item: any[], index: number) => {
            return (
              <Tr key={index}>
                <Td>
                  <Text fontSize={'lg'} fontWeight={'medium'}>
                    {item[0]}
                  </Text>
                </Td>
                <Td>
                  <BlockPanelComponent
                    content={{
                      data: item[1],
                      name: 'Table Item',
                      type: 'block',
                    }}
                  />
                </Td>
              </Tr>
            )
          })}
        </Tbody>
      </Table>
    </TableContainer>
  )
}
