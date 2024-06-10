import { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";

import { Navbar } from "@/components/Navbar";
import { FilterContainer } from "@/containers/FilterContainer";
import { GridCardContainer } from "@/containers/GridCardContainer";
import { ArticlesTag } from "@/types/card";

const Container = styled.div`
  ${tw`w-[90vw]`}
  max-width:1440px;
  margin: auto;
`;

export const Articles = () => {
  const [filteredItem, setFilteredItem] = useState("");

  return (
    <Container>
      <Navbar />
      <FilterContainer
        filteredItem={filteredItem}
        setFilteredItem={setFilteredItem}
      />

      <GridCardContainer filteredItem={filteredItem} />
    </Container>
  );
};
