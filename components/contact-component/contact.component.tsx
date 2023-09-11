import React from 'react'
import { useForm } from '../form/provider/form.hook'
import { text, email, long } from '../form/provider/form.service'
import {
  Box,
  Button,
  SimpleGrid,
  Heading,
  HStack,
  useBoolean,
} from '@chakra-ui/react'
import { emailSender } from '../../lib/email'
import useFeedback from '../../hook/feedback.hook'
import { useContent } from '../../providers/content.context'
import { ArrayHelper } from '../../helpers/array.helper'

export default function ContactComponent() {
  const [isLoading, { on, off }] = useBoolean(false)
  const { render, reset, handleSubmission } = useForm({
    numberOfRows: 4,
    schema: {
      name: text().row(1).placeholder('Your Name').label('Your Name'),
      email: email()
        .row(2)
        .validate((v) => v.email('Please provide a valid email address'))
        .label('Email')
        .placeholder('Email'),
      mobile: text().row(3).label('Mobile').placeholder('Mobile'),
      message: long()
        .row(4)
        .label('Message')
        .placeholder('Start typing your message here...'),
    },
  })

  const { render: feedbackRender, triggerFeedback } = useFeedback()

  const { instructors } = useContent()

  const sendMessage = async (data: any) => {
    on()

    const res = await ArrayHelper.map<any, any>(
      instructors,
      async (instructor) => {
        try {
          return await emailSender({
            clientName: data.name,
            email: instructor.email,
            name: instructor.name,
            clientEmail: data.email,
            clientMobile:
              data.mobile.trim().length == 0 ? undefined : data.mobile,
            message: data.message,
            title: `New Message Received from ${data.name}`,
          })
        } catch (error) {
          console.log(error)
          return
        }
      },
    )

    const responses = res.filter((el: any) => el)

    off()
    if (responses.length > 0 && res[0] === 'OK') {
      reset()
      triggerFeedback('Successfully sent message', {
        type: 'success',
      })
    } else {
      triggerFeedback('Unable to send message', {
        type: 'error',
      })
    }
  }

  return (
    <SimpleGrid id="contact" mb={10} columns={{ base: 1, md: 2, lg: 2 }}>
      <Box border={'InactiveBorder'} py={10} px={{ base: 3, md: 10 }}>
        <Heading fontWeight={'light'} color={'green'} size={'xl'}>
          Apply now
        </Heading>
        <Heading fontWeight={'medium'} size={'2xl'}>
          Contact us
        </Heading>
        <Box mt={5} bg={'green.500'} h={1} w={'60%'} mb={10} />

        {render}

        <HStack justifyContent={'right'} mt={20}>
          <Button
            onClick={handleSubmission(sendMessage)}
            variant={'ghost'}
            colorScheme={'green'}
            isLoading={isLoading}
          >
            Send
          </Button>
        </HStack>

        {feedbackRender}
      </Box>

      <Box
        h={'full'}
        w={'full'}
        bg={`url('${'https://images.pexels.com/photos/11655091/pexels-photo-11655091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}')`}
        bgSize={'cover'}
        bgPosition={'center'}
        p={49}
        display={{ base: 'none', md: 'unset' }}
        borderRadius={20}
      />
    </SimpleGrid>
  )
}
