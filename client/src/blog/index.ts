import logo from "@/assets/Ant.png";
import JS_Proxy from "@/blog/Javascript/JS_Proxy/js_proxy.md";
import JS_ShallowDeep from "@/blog/Javascript/JS_ShallowDeep/js_shallowDeep.md";
import JS_Variables from "@/blog/Javascript/JS_Variables/js_variables.md";
import React_useState from "@/blog/React/hooks/useState/useState.md";
import { BlogMapTypes } from "@/types/blog";

const defaultCoverImage = logo;

export const BLOG_MAP: BlogMapTypes = {
  js_variables: {
    id: "js_variables",
    coverImg: "/src/blog/Javascript/JS_Variables/variables.webp",
    title: "[筆記] JS-無宣告/var/let/const",
    tags: ["Javascript"],
    description: "",
    publishTime: "2023/06",
    file: JS_Variables,
  },
  js_proxy: {
    id: "js_proxy",
    coverImg: "",
    title: "[筆記] JS Proxy",
    tags: ["Javascript"],
    description: "",
    publishTime: "2023/06",
    file: JS_Proxy,
  },
  js_shallowDeep: {
    id: "js_shallowDeep",
    coverImg: "",
    title: "[筆記] 淺拷貝 & 深拷貝",
    tags: ["Javascript"],
    description: "",
    publishTime: "2023/06",
    file: JS_ShallowDeep,
  },
  react_useState: {
    id: "react_useState",
    coverImg: "",
    title: "[筆記] useState",
    tags: ["React"],
    description: "",
    publishTime: "2023/06",
    file: React_useState,
  },
};

export const BLOG_LIST = Object.values(BLOG_MAP);
