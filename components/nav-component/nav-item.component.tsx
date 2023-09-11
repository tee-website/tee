import React from 'react'
import Link from 'next/link'
import { Button, Text } from '@chakra-ui/react'

export type NavItemProps = {
  label: string
  link: string
  color?: string
}

export default function NavItem({ link, label, color }: NavItemProps) {
  return (
    <Link href={link}>
      <Button
        data-group
        borderRadius={'full'}
        as={'a'}
        px={10}
        transition={'0.25s'}
        _hover={{
          background: 'green.400',
          color: 'white',
        }}
        href={link}
        colorScheme="whiteAlpha"
      >
        <Text fontWeight={'medium'}>{label}</Text>
      </Button>
    </Link>
  )
}
