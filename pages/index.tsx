import { Box, Divider, Grid, GridItem } from "@chakra-ui/react";
import HomeLayout from "../layout/index.layout";
import PackageContainer from "../components/package-component";

import React from "react";
import { client } from "../lib/client";
import HeroBanner from "../components/banner-component/hero-banner.component";
import HeroSubBanner from "../components/banner-component/hero-sub-banner";

import AboutComponent from "../components/about-component/about.component";
import InstructorContainer from "../components/about-component/instructors.component";

import ContentComponent from "../components/content.component";
import ContactComponent from "../components/contact-component/contact.component";
import ContentProvider from "../providers/content.provider";

export default function Home({ content }: { content: any }) {
  return (
    <ContentProvider content={content[0]}>
      <HomeLayout>
        <HeroBanner />
        <HeroSubBanner />

        <Grid
          px={{ base: 5, md: 10, lg: 40 }}
          templateColumns={"repeat(12,1fr)"}
          templateRows={"repeat(12,1fr)"}
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
          <Box px={{ base: 10, md: 20, lg: 40 }}>
            <ContentComponent />
            <Divider my={5} />
            <PackageContainer packages={[]} />
            <Divider my={5} />
            <ContactComponent />
          </Box>
        </Box>
      </HomeLayout>
    </ContentProvider>
  );
}

export const getServerSideProps = async () => {
  // const pkg = await client.fetch('*[_type == "package"]');
  const content = await client.fetch(
    '*[_type == "content_version" && name == "development"]'
  );
  return {
    props: { content },
  };
};
