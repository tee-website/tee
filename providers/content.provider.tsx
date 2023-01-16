import React from "react";
import { ContentContext, ContentProps } from "./content.context";

export type ContentProviderProps = {
  children: React.ReactNode;
  content: any;
  instructors: any[];
  offerings: any[];
};

export default function ContentProvider({
  children,
  content,
  instructors,
  offerings,
}: ContentProviderProps) {
  console.log(content.content);
  const value: ContentProps = {
    banner: content ? content.banner : null,
    about: content ? content.about : null,
    instructors,
    offerings,
    content: content.content ? content.content : [],
  };

  return (
    <ContentContext.Provider value={value}>{children}</ContentContext.Provider>
  );
}
