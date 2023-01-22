import React from "react";
import { ContentContext, ContentProps } from "./content.context";

export type ContentProviderProps = {
  children: React.ReactNode;
  data: any;
};

export default function ContentProvider({
  children,
  data,
}: ContentProviderProps) {
  const value: ContentProps = {
    banner: data.content?.banner,
    about: data.content?.about,
    instructors: data?.instructors ?? [],
    offerings: data?.packages ?? [],
    content: data.content?.content ?? [],
    package_banner: data.content?.package,
  };

  return (
    <ContentContext.Provider value={value}>{children}</ContentContext.Provider>
  );
}
