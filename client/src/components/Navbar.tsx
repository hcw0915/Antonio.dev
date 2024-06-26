import styled from "styled-components";
import tw from "twin.macro";

import { SOCIAL_MEDIA_LIST } from "@/constants/social";

const socialMediaList = SOCIAL_MEDIA_LIST;

const Container = styled.div`
  ${tw`relative text-white font-semibold text-[6rem] px-10 py-4 font-handlee flex flex-col items-center justify-center border-b-2 border-[white] mb-2`}

  &::before {
    ${tw`absolute w-full h-full top-0 left-0 content-['']`}
    background-image: url("/assets/car.webp");
    /* background-attachment: ; */
    background-position: top bottom;
    background-size: cover;
    background-repeat: no-repeat;
    filter: blur(1.5px);
  }
`;

const TextContainer = styled.div`
  ${tw`z-20`}
`;

const Title = styled.div`
  ${tw`z-[10] text-[10rem]`}
`;

const SubTitle = styled.div`
  ${tw`z-10 text-[2rem] text-center mb-[1rem]`}
`;

const SvgContainer = styled.div`
  ${tw`z-20 flex items-center justify-center gap-[1.25rem]`}
`;

const Link = styled.a`
  ${tw`hover:scale-125 cursor-pointer`}
`;

export const Navbar = () => {
  return (
    <Container>
      <TextContainer>
        <Title>Antonio Hou</Title>
        <SubTitle>Frontend Developer</SubTitle>
      </TextContainer>
      {/* // TODO icon need to be adjust */}
      <SvgContainer>
        {socialMediaList.map((item) => {
          const Component = item.icon;
          return (
            <Link href={item.url} target="_blank">
              <Component width={32} height={32} />
            </Link>
          );
        })}
      </SvgContainer>
    </Container>
  );
};
