import sanityClient from "@sanity/client";
import builder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2023-01-12",
  useCdn: true,
});

export const urlFor = (source: SanityImageSource) =>
  builder(client).image(source).url();
