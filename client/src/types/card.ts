import { BlogMapKeyTypes } from "@/types/blog";

export type ArticlesTag =
  | "Javascript"
  | "Typescript"
  | "FrontendInfra"
  | "CSS"
  | "HTML"
  | "React"
  | "Vue"
  | "Other";

export type CardProps = {
  id: BlogMapKeyTypes;
  title: string;
  coverImg?: string;
  tags: ArticlesTag[];
  description?: string;
  publishTime: string | number;
};
