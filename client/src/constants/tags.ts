import { ArticlesTag } from "@/types/card";

export const TagsColor: Record<ArticlesTag, Record<string, string>> = {
  FrontendInfra: { bgColor: "#C08B5C", textColor: "#000" },
  Javascript: { bgColor: "#FFC94A", textColor: "#000" },
  Typescript: { bgColor: "#377CC8", textColor: "#fff" },
  HTML: { bgColor: "#E6532D", textColor: "#fff" },
  CSS: { bgColor: "#FA7070", textColor: "#fff" },
  React: { bgColor: "#36AFE1", textColor: "#fff" },
  Vue: { bgColor: "#47BA87", textColor: "#fff" },
  Vite: { bgColor: "#AB5AFF", textColor: "#fff" },
  // Other: { bgColor: "#FFC94A", textColor: "#000" }, // 這個會�� tags 看起來重複，因為有些 tags 會有多個��性相同的 CSS 定義
  Other: { bgColor: "purple", textColor: "#fff" },
};

export const tagList = Object.keys(TagsColor);
