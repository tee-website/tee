import { useContext, createContext } from "react";

export type ContentProps = {
  banner: any;
  about: any;
  instructors: any[];
  offerings: any[];
  content: any[];
};
export const ContentContext = createContext<ContentProps | undefined>(
  undefined
);

export const useContent = () => {
  const context = useContext(ContentContext);

  if (context) return context;
  throw new Error("Please user this context within its provider");
};
