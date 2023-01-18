import React from "react";
import { useForm } from "../form/provider/form.hook";
import { text, email, long } from "../form/provider/form.service";
import { Box, Button, SimpleGrid, Heading, HStack } from "@chakra-ui/react";
import { emailSender } from "../../lib/email";
import { useContent } from "../../providers/content.context";
import useFeedback from "../../hook/feedback.hook";

export default function ContactComponent() {
  const { instructors } = useContent();
  const { render, reset, handleSubmission } = useForm({
    numberOfRows: 4,
    schema: {
      name: text().row(1).placeholder("Your Name").label("Your Name"),
      email: email()
        .row(2)
        .validate((v) => v.email("Please provide a valid email address"))
        .label("Email")
        .placeholder("Email"),
      mobile: text().row(3).label("Mobile").placeholder("Mobile"),
      message: long()
        .row(4)
        .label("Message")
        .placeholder("Start typing your message here..."),
    },
  });

  const { render: feedbackRender, triggerFeedback } = useFeedback();

  const sendMessage = async (data: any) => {
    const res = await emailSender(data, "send-form").catch((err) =>
      console.log(err)
    );
    if (res && res.status === 200) {
      reset();
      triggerFeedback("Successfully sent message", {
        type: "success",
      });
    } else {
      triggerFeedback("Unable to send message", {
        type: "error",
      });
    }
  };

  return (
    <SimpleGrid
      id="contact"
      boxShadow={"xl"}
      mb={10}
      columns={{ base: 1, md: 2, lg: 2 }}
    >
      <Box border={"InactiveBorder"} bg={"whitesmoke"} p={10}>
        <Heading fontWeight={"light"} color={"green"} size={"xl"}>
          Apply now
        </Heading>
        <Heading fontWeight={"medium"} size={"2xl"}>
          Contact us
        </Heading>
        <Box mt={5} bg={"green.500"} h={1} w={"60%"} mb={10} />

        {render}

        <HStack justifyContent={"right"} mt={20}>
          <Button
            onClick={handleSubmission(sendMessage)}
            variant={"ghost"}
            colorScheme={"green"}
          >
            Send Message
          </Button>
        </HStack>

        {feedbackRender}
      </Box>

      <Box
        h={"full"}
        w={"full"}
        bg={`url('${"https://images.pexels.com/photos/11655091/pexels-photo-11655091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}')`}
        bgSize={"cover"}
        bgPosition={"center"}
        p={49}
        display={{ base: "none", md: "unset" }}
      />
    </SimpleGrid>
  );
}
