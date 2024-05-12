import styled from "styled-components";
import tw from "twin.macro";

import { BLOG_LIST } from "@/blog";
import { Card } from "@/components/Card";
import { Navbar } from "@/components/Navbar";

const blogList = BLOG_LIST;

const Container = styled.div`
  ${tw`w-[90vw]`}
  max-width:1440px;
  margin: auto;
`;

const GridCardContainer = styled.div`
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

export const Articles = () => {
  return (
    <Container>
      <Navbar />
      {/* <Filter /> */}
      <GridCardContainer>
        {blogList.map((blog, index) => (
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
      </GridCardContainer>
    </Container>
  );
};
