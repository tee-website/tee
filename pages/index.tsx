import React from 'react'

import { Box, Divider, Grid, GridItem } from '@chakra-ui/react'
import HomeLayout from '../layout/index.layout'
import PackageContainer from '../components/package-component'

import { client } from '../lib/client'
import HeroBanner from '../components/banner-component/hero-banner.component'

import AboutComponent from '../components/about-component/about.component'
import InstructorContainer from '../components/about-component/instructors.component'

import ContentComponent from '../components/content.component'
import ContentProvider from '../providers/content.provider'
import { to_dict } from '../utils/index'

export default function Home(data: { data: any }) {
  if (!data) return <></>
  return (
    <>
      <ContentProvider data={data}>
        <HomeLayout>
          <HeroBanner />

          <Grid
            mt={5}
            px={{ base: 5, md: 10, lg: 40 }}
            templateColumns={'repeat(12,1fr)'}
            templateRows={'repeat(12,1fr)'}
            mb={5}
            gap={2}
          >
            <GridItem colSpan={{ base: 12, md: 12, lg: 4 }} rowSpan={12}>
              <AboutComponent />
            </GridItem>
            <GridItem colSpan={{ base: 12, md: 12, lg: 8 }} rowSpan={12}>
              <InstructorContainer />
            </GridItem>
          </Grid>

          <Box>
            <Box px={{ base: 5, md: 20, lg: 40 }}>
              <Divider my={5} />
              <ContentComponent />
              <Divider my={5} />
              <PackageContainer />
              <Divider my={5} />
            </Box>
          </Box>
        </HomeLayout>
      </ContentProvider>
    </>
  )
}

export const getServerSideProps = async () => {
  const version = process.env.NEXT_PUBLIC_VERSION_SET
  const __content = await client
    .fetch(`*[ _type == "version" && name == "${version}" ]`)
    .catch((err) => {
      console.log(err)
    })

  let packagesQuery = `*[ _type == 'package' && available == true ]`
  if (version === 'preview') packagesQuery = `*[_type == 'package']`

  const __packages = await client
    .fetch(packagesQuery)
    .catch((err) => console.log(err))

  let instructorsQuery = `*[ _type == 'instructor' && public == true ]`
  if (version === 'preview') instructorsQuery = `*[_type == 'instructor']`

  const __instructors = await client
    .fetch(instructorsQuery)
    .catch((err) => console.log(err))

  if (!__content) return { notFound: true }
  if (__content.length === 0) return { notFound: true }

  const data = await to_dict({
    content: __content[0],
    packages: __packages ?? [],
    instructors: __instructors ?? [],
  })

  return { props: data }
}
