import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  &:first-child {
    border-top: 2px solid black;
  }
  &:not(:first-child) {
    border-top: none;
  }
`;
