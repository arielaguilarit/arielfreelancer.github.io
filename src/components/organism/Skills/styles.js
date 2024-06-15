import styled from "styled-components";

export const LogosSkills = styled.article`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  & > div {
    padding: 8px;
    border: 2px solid black;
    border-radius: 8px;
    & > svg {
      width: 50px;
      height: 50px;
    }

    &:hover {
      border: 2px solid white;
      & > svg {
        fill: white;
        & > path {
          fill: white;
        }
      }
    }
  }
`;
