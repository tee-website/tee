import React from "react";
import { TableContainer, Table, Tr, Tbody, Td, Text } from "@chakra-ui/react";
import { TabPanelType } from "../package-component/package-modal.component";

export default function TablePanelComponent({
  content,
}: {
  content: { name: string; type: TabPanelType; data: any };
}) {
  return (
    <TableContainer>
      <Table variant={"striped"} orientation="vertical">
        <Tbody>
          {content.data.map((items: any, index: number) => (
            <Tr key={index}>
              {items.map((item: any, index: any) => (
                <Td key={index}>
                  {" "}
                  <Text fontWeight={index === 0 ? "medium" : "unset"}>
                    {item}
                  </Text>{" "}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
