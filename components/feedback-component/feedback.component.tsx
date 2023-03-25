import React from "react";
import { Box, Text } from "@chakra-ui/react";

export type FeedbackType = "error" | "success" | "info";

export type FeedbackProps = {
  type: FeedbackType;
  message: string;
  title?: string;
  show?: boolean;
};

export default function Feedback({
  type,
  title,
  message,
  show,
}: FeedbackProps) {
  return (
    <Box
      maxW={{ base: "80vw", lg: "40vw" }}
      color={"black"}
      position={"fixed"}
      bottom={20}
      p={5}
      right={5}
      borderTopColor={
        type === "error"
          ? "red.500"
          : type === "success"
          ? "green.400"
          : "blue.400"
      }
      borderTopWidth={"5px"}
      background={"whiteAlpha.900"}
      boxShadow={'dark-lg'}
      display={show ? "block" : "none"}
    >
      {title ? <Text fontWeight={"bold"}>{title}</Text> : <></>}
      <Text fontWeight={"medium"}>{message}</Text>
    </Box>
  );
}
