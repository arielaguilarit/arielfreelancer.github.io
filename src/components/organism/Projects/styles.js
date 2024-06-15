import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 16px;
  & > :nth-child(odd) > div:first-child {
    order: 1;
  }
`;
