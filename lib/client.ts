import sanityClient from "@sanity/client";
import builder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const client = sanityClient({
  projectId: "rn2xuz36",
  dataset: "development",
  apiVersion: "2023-01-12",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

export const urlFor = (source: SanityImageSource) =>
  builder(client).image(source).url();
