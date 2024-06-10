import { ArticlesTag } from "@/types/card";

export const TagsColor: Record<ArticlesTag, Record<string, string>> = {
  FrontendInfra: { bgColor: "#C08B5C", textColor: "#000" },
  Javascript: { bgColor: "#FFC94A", textColor: "#000" },
  Typescript: { bgColor: "#377CC8", textColor: "#fff" },
  HTML: { bgColor: "#E6532D", textColor: "#fff" },
  CSS: { bgColor: "#FA7070", textColor: "#fff" },
  React: { bgColor: "#36AFE1", textColor: "#fff" },
  Vue: { bgColor: "#47BA87", textColor: "#fff" },
  Other: { bgColor: "purple", textColor: "#fff" },
};

export const tagList = Object.keys(TagsColor);
