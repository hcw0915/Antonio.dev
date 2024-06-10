import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";

import { TagsColor } from "@/constants/tags";
import { BlogMapKeyTypes } from "@/types/blog";
import { CardProps } from "@/types/card";
import { timestampToDate } from "@/utils/date";

const CardContainer = styled.div`
  ${tw`bg-[white] p-5 rounded-xl cursor-pointer gap-[.5rem] flex flex-col`}
  box-shadow: 0px 10px 20px rgba(0,0,0,0.5);
  transition: 0.3s;
  &:hover {
    scale: 1.05;
  }
`;

const CardImage = styled.img`
  ${tw`w-full rounded-lg h-[17.5rem] bg-cover`}
`;

const CardImageText = styled.div`
  ${tw`bg-amber-100 text-[#676767] w-full rounded-lg h-[17.5rem] flex items-center justify-center font-extrabold text-[2rem]`}
`;

const CardTitle = styled.div`
  ${tw`text-2xl font-bold pt-2`}
`;

const CardBadgeWrapper = styled.div`
  ${tw`flex items-center w-full gap-[0.1rem]`}
`;

const CardBadge = styled.div<{ bgColor: string; textColor: string }>`
  ${tw`flex items-center justify-center px-3 m-1 h-[1.5rem] text-[0.875rem] rounded-full`}
  background-color: ${(p) => p.bgColor};
  color: ${(p) => p.textColor};
`;

const CardTime = styled.div`
  ${tw`text-[#c33f21] font-bold w-full flex items-center justify-end mt-1`}
`;

const CardDescription = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
`;

export const Card = (props: CardProps) => {
  const { id, coverImg, title, tags, description, publishTime } = props;

  const navigate = useNavigate();

  const time = (() => {
    return typeof publishTime === "string"
      ? publishTime
      : timestampToDate(publishTime);
  })();

  const handleClick = (id: BlogMapKeyTypes) => () => {
    navigate(`/${id}`);
  };

  return (
    <CardContainer onClick={handleClick(id)}>
      {coverImg ? (
        <CardImage src={coverImg} />
      ) : (
        <CardImageText>{id}</CardImageText>
      )}

      <CardTitle>{title}</CardTitle>
      <CardBadgeWrapper>
        {tags.map((tag) => (
          <CardBadge
            key={tag}
            bgColor={TagsColor[tag].bgColor}
            textColor={TagsColor[tag].textColor}
          >
            {tag}
          </CardBadge>
        ))}
      </CardBadgeWrapper>
      <CardDescription>{description}</CardDescription>
      <CardTime>{time}</CardTime>
    </CardContainer>
  );
};
