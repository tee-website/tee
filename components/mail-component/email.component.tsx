import React from 'react'
import { Box, List, ListItem, Text } from '@chakra-ui/react'
import { IContactEmail } from './mail.component'

export default function EmailComponent({
  props: { name, clientName, clientEmail, clientMobile, message },
}: {
  props: IContactEmail
}) {
  return (
    <>
      <p>
        Hello <b>{name}</b>,
      </p>

      <br />

      <p>You got a new message from {clientName}</p>

      <br />

      <div style={{ backgroundColor: 'whitesmoke', padding: '15px' }}>
        <p>{message}</p>
      </div>

      <hr />

      <p>
        You can contact {clientName}, by the contact information provided below.{' '}
        <br />
        <br />
        <b>Email </b>
        {clientEmail} <br />
        <b>Mobile </b>
        {clientMobile ?? 'n/a'} <br />
      </p>

      <p>
        Warm Regards, <br />
        <b>2t2e Tech Support Team</b>
      </p>
    </>
  )
}
