import { Client } from "@notionhq/client";
import { useEffect } from "react";
import styled from "styled-components";
import tw from "twin.macro";

import { Card } from "@/components/Card";
import { Navbar } from "@/components/Navbar";

const Container = styled.div`
  ${tw`w-[90vw]`}
  max-width:1440px;
  margin: auto;
`;

const AngryGridContainer = styled.div`
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

const a = [1, 2, 3, 4, 5, 6, 7, 8];

export const Articles = () => {
  const notion = new Client({
    auth: "secret_Wz8ynnzpLcnSAhmIjsEVqhEK7oaxQOvGMOerIM98GCs",
  });
  useEffect(() => {
    (async () => {
      const pages = await notion.databases.query({
        database_id: "da12c2d245be4d5d8b279b365e5e7bb7",
      });
      console.log(pages);
    })();
  }, []);

  return (
    <Container>
      <Navbar />

      <AngryGridContainer>
        {a.map((data, index) => (
          <GridItem key={index} style={{ width: "25rem" }}>
            <Card id={index} />
          </GridItem>
        ))}
      </AngryGridContainer>
    </Container>
  );
};

// notion id: da12c2d245be4d5d8b279b365e5e7bb7
