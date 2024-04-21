import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useLocation } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark as theme } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";
import styled from "styled-components";
import tw from "twin.macro";

import { BLOG_MAP } from "@/blog";
import { Banner } from "@/components/Banner";
import { BlogMapKeyTypes } from "@/types/blog";

const Container = styled.div`
  ${tw`bg-[#efefef] flex flex-col items-center justify-center pb-[10rem]`}
`;

const blogMap = BLOG_MAP;

const MarkdownBlog = () => {
  const { pathname } = useLocation();
  const [markdownContent, setMarkdownContent] = useState("");

  const blogId = pathname.split("/").at(-1) as BlogMapKeyTypes;

  useEffect(() => {
    fetch(blogMap[blogId].file)
      .then((response) => response.text())
      .then((text) => {
        setMarkdownContent(text);
      });
  }, [pathname, blogId]);

  return (
    <Container>
      <Banner />
      <ReactMarkdown
        className={"prose mt-5"}
        remarkPlugins={[remarkGfm]}
        children={markdownContent}
        components={{
          code: (props) => {
            const { children, className, inline } = props;
            const match = /language-(\w+)/.exec(className || "");
            return match ? (
              <SyntaxHighlighter
                inline={inline}
                PreTag="div"
                children={String(children).replace(/\n$/, "")}
                language={match[1]}
                style={theme}
              />
            ) : (
              <code className={className}>{children}</code>
            );
          },
        }}
      />
    </Container>
  );
};

export default MarkdownBlog;
