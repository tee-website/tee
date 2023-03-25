import React from 'react'

import { Email, renderEmail } from 'react-html-email'
import EmailComponent from './email.component'
import { ChakraProvider } from '@chakra-ui/react'

export interface IContactEmail {
  title: string
  name: string
  clientName: string
  clientEmail: string
  clientMobile?: string
  message: string
  email: string
}

export const emailHtml = (props: IContactEmail) => {
  const { title } = props
  return renderEmail(
    <Email title={title} align="left">
      <EmailComponent props={props} />
    </Email>,
  )
}
