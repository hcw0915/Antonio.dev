import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import tw from "twin.macro";

import { tagList } from "@/constants/tags";

type FilterContainerProps = {
  filteredItem: string;
  setFilteredItem: Dispatch<SetStateAction<string>>;
};

const Container = styled.div`
  ${tw`w-full flex gap-[0.5rem] my-[0.25rem] `}
`;

const CategoryItem = styled.div<{ isSelected?: boolean }>`
  ${tw`min-w-[6.25rem] border-[0.125rem] border-[#7c9ed1] font-bold p-[0.5rem] rounded-full flex justify-center items-center hover:bg-[#9abcee] cursor-pointer`}
  background-color: ${(p) => (p.isSelected ? "#9abcee" : "white")};
`;

export const FilterContainer = (props: FilterContainerProps) => {
  const { filteredItem, setFilteredItem } = props;

  const onSelectItem = (item: string) => () => {
    if (item === filteredItem) {
      setFilteredItem("");
    } else {
      setFilteredItem(item);
    }
  };

  return (
    <Container>
      {tagList.map((item) => {
        return (
          <CategoryItem
            key={item}
            onClick={onSelectItem(item)}
            isSelected={item === filteredItem}
          >
            {item}
          </CategoryItem>
        );
      })}
    </Container>
  );
};
