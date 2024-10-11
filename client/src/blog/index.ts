import Blog_Refactor from "@/blog/Articles/refactorStep.md";
import Blog_Cookie_Storage from "@/blog/General/Cookie_Storage/Cookie_Storage.md";
import Eslint_Custom_Rules from "@/blog/General/Eslint_Custom_Rules/Eslint_Custom_Rules.md";
import Eslint_Simple_sort from "@/blog/General/Eslint_Simple_Sort/Simple_sort.md";
import JS_URL from "@/blog/Javascript/JS_new_URL/js_url.md";
import JS_Proxy from "@/blog/Javascript/JS_Proxy/js_proxy.md";
import JS_ShallowDeep from "@/blog/Javascript/JS_ShallowDeep/js_shallowDeep.md";
import JS_Variables from "@/blog/Javascript/JS_Variables/js_variables.md";
import React_useState from "@/blog/React/hooks/useState/useState.md";
import React_useState_2 from "@/blog/React/hooks/useState/useState_2.md";
import React_Children from "@/blog/React/others/React_Children.md";
import React_generalComponent from "@/blog/React/others/React_GeneralComponent.md";
import React_unStyledComponent from "@/blog/React/others/React_UnstyledComponent.md";
import Recursive_Folders from "@/blog/React/others/Recursive_Folders.md";
import TS_Infer from "@/blog/Typescript/TS_Infer.md";
import TS_Signatures from "@/blog/Typescript/TS_Signatures.md";
import Vite_BaseConfig from "@/blog/Vite/Vite_config.md";
import Vite_twinMarco from "@/blog/Vite/Vite_twinMarco.md";
import { BlogMapTypes } from "@/types/blog";

export const BLOG_MAP: BlogMapTypes = {
  eslint_custom_rules: {
    id: "eslint_custom_rules",
    coverImg: "",
    title: "[筆記] Custom Eslint Rules 專案內客製化規則",
    tags: ["Other"],
    description: "",
    publishTime: "2024/10/11",
    file: Eslint_Custom_Rules,
  },
  eslint_simple_sort: {
    id: "eslint_simple_sort",
    coverImg: "",
    title: "[筆記] eslint-plugin-simple-import-sort 順序排列",
    tags: ["Other"],
    description: "",
    publishTime: "2024/10/11",
    file: Eslint_Simple_sort,
  },
  vite_twinMarco: {
    id: "vite_twinMarco",
    coverImg: "",
    title: "[筆記] Vite 配置 twin.marco / styled-components 的配置",
    tags: ["React", 'CSS', 'Vite'],
    description: "",
    publishTime: "2024/10/11",
    file: Vite_twinMarco,
  },
  recursive_folders: {
    id: "recursive_folders",
    coverImg: "",
    title: "[練習] React recursive folders components",
    tags: ["React", "Typescript"],
    description: "",
    publishTime: "2024/09/08",
    file: Recursive_Folders,
  },
  react_unstyledComp: {
    id: "react_unstyledComp",
    coverImg: "",
    title: "[筆記] React unstyled Component",
    tags: ["React", "Typescript"],
    description: "",
    publishTime: "2024/08/10",
    file: React_unStyledComponent,
  },
  vite_baseConfig: {
    id: "vite_baseConfig",
    coverImg: "",
    title: "[筆記] Vite 生產/開發配置小技巧",
    tags: ["Vite", "FrontendInfra"],
    description: "",
    publishTime: "2024/07/28",
    file: Vite_BaseConfig,
  },
  ts_infer: {
    id: "ts_infer",
    coverImg: "",
    title: "[筆記] TS infer 推斷型別",
    tags: ["Typescript"],
    description: "",
    publishTime: "2024/07/27",
    file: TS_Infer,
  },
  react_Children: {
    id: "react_Children",
    coverImg: "",
    title: "[筆記] react_Children",
    tags: ["React"],
    description: "",
    publishTime: "2024/06/26",
    file: React_Children,
  },
  react_useState_2: {
    id: "react_useState_2",
    coverImg: "",
    title: "[筆記] useState_2",
    tags: ["React"],
    description: "",
    publishTime: "2024/06/26",
    file: React_useState_2,
  },
  blog_Cookie_Storage: {
    id: "blog_Cookie_Storage",
    coverImg: "",
    title: "[心得] Cookie LocalStorage SessionStorage 差異",
    tags: ["Other"],
    description: "",
    publishTime: "2024/06/10",
    file: Blog_Cookie_Storage,
  },
  blog_refactor: {
    id: "blog_refactor",
    coverImg: "",
    title: "[心得] 專案重構基礎流程",
    tags: ["Other"],
    description: "",
    publishTime: "2024/06/02",
    file: Blog_Refactor,
  },
  react_generalComp: {
    id: "react_generalComp",
    coverImg: "",
    title: "[筆記] React 客製組件型別",
    tags: ["Typescript", "React"],
    description: "",
    publishTime: "2024/06/02",
    file: React_generalComponent,
  },
  ts_signatures: {
    id: "ts_signatures",
    coverImg: "",
    title: "[筆記] Typescript 索引簽名",
    tags: ["Typescript"],
    description: "",
    publishTime: "2024/05/26",
    file: TS_Signatures,
  },
  js_new_URL: {
    id: "js_new_URL",
    coverImg: "",
    title: "[筆記] new URL & URLSearchParams",
    tags: ["Javascript"],
    description: "",
    publishTime: "2024/05/14",
    file: JS_URL,
  },
  js_variables: {
    id: "js_variables",
    coverImg: "/blog/JS_Variables/variables.webp",
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
  react_useState_1: {
    id: "react_useState_1",
    coverImg: "",
    title: "[筆記] useState_1",
    tags: ["React"],
    description: "",
    publishTime: "2023/06",
    file: React_useState,
  },
};

export const BLOG_LIST = Object.values(BLOG_MAP);
