import styled from "styled-components";
import tw from "twin.macro";

const Container = styled.div`
  ${tw`relative`}
`;

const Quote = styled.div`
  ${tw`absolute right-2 bottom-1 text-[#d0d0d0] text-[.75rem] `}
`;

export const Banner = () => {
  return (
    <Container>
      <img src="/assets/frontend.webp" />
      <Quote>
        Image from medium{" "}
        <a
          href="https://medium.com/@ist.stevkovski/is-it-front-end-or-front-end-or-frontend-3ae717cae4aa"
          className="underline"
        >
          @Ivan Stevkovski
        </a>
      </Quote>
    </Container>
  );
};
