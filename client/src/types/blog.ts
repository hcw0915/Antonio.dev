import { BLOG_MAP } from "@/blog";
import { CardProps } from "@/types/card";

export type BlogMapKeyTypes = keyof typeof BLOG_MAP;

type BlogSchema = {
  file: string;
  coverImg?: string;
};

export type BlogMapTypes = Record<string, BlogSchema & CardProps>;
