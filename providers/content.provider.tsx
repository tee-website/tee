import React from "react";
import { ContentContext, ContentProps } from "./content.context";
import { client } from "../lib/client";

export type ContentProviderProps = {
  children: React.ReactNode;
  content: any;
};

export default function ContentProvider({
  children,
  content,
}: ContentProviderProps) {
  const [banner, setBanner] = React.useState<any>();

  const getReference = async (type: string, ref: string) => {
    return await client.fetch(`*[_type == "${type}" && _id == "${ref}"]`);
  };

  const handleSetBanner = async () => {
    const banner = await getReference("banner", content?.banner._ref);
    setBanner(banner);
  };

  const value: ContentProps = {
    banner,
  };

  React.useEffect(() => {
    if (content) handleSetBanner();
  }, [content]);

  return (
    <ContentContext.Provider value={value}>{children}</ContentContext.Provider>
  );
}
