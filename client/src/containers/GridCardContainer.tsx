import { useMemo } from "react";
import styled from "styled-components";

import { BLOG_LIST } from "@/blog";
import { Card } from "@/components/Card";
import { ArticlesTag } from "@/types/card";

const blogList = BLOG_LIST;

type GridCardContainerProps = {
  filteredItem: string;
};

const Container = styled.div`
  display: grid;
  background-color: #e3e1d9;
  padding-top: 1rem;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  gap: 3rem;
  padding: 2rem 1rem;
  justify-items: center;
  align-items: center;
`;

const GridItem = styled.div`
  width: 100%;
`;

export const GridCardContainer = (props: GridCardContainerProps) => {
  const { filteredItem } = props;

  const filteredBlogList = useMemo(() => {
    if (!filteredItem || filteredItem === "All") return blogList;
    const filterList = blogList.filter((b) =>
      b.tags.includes(filteredItem as ArticlesTag)
    );
    return filterList;
  }, [filteredItem]);

  return (
    <Container>
      {filteredBlogList.map((blog, index) => (
        <GridItem key={index} style={{ width: "25rem" }}>
          <Card
            id={blog.id}
            coverImg={blog.coverImg}
            title={blog.title}
            tags={blog.tags}
            description={blog.description}
            publishTime={blog.publishTime}
          />
        </GridItem>
      ))}
    </Container>
  );
};
