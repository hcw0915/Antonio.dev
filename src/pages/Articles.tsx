import styled from "styled-components";
import tw from "twin.macro";

import { BLOG_LIST } from "@/blog";
import { Card } from "@/components/Card";
import { Navbar } from "@/components/Navbar";
import { Filter } from "@/containers/Filter";

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
  padding: 2rem 1rem; /* 添加內邊距以避免邊緣卡片過近 */
  justify-items: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
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

// notion id: da12c2d245be4d5d8b279b365e5e7bb7
