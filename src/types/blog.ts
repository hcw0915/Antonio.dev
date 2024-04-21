import { BLOG_MAP } from "@/blog";

export type BlogMapKeyTypes = keyof typeof BLOG_MAP;

type BlogSchema = {
  file: string;
  time: string;
  coverImg?: string;
};

export type BlogMapTypes = Record<string, BlogSchema>;
