import styled from "styled-components";

export const ContainerAccordion = styled.article``;

export const HeaderAccordion = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  &:hover {
    border-left: 2px solid black;
    padding-left: 8px;
    background-color: rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease-in-out;
  }
`;

export const ContentAccordion = styled.main`
  max-height: ${({ $isActive, $height }) => ($isActive ? $height : "0px")};
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};
  padding: ${({ $isActive }) => ($isActive ? "10px" : "0 10px")};
  overflow: hidden;
  transition: max-height 0.6s ease-in-out, opacity 0.8s ease-in-out,
    display 1s ease-in-out;
`;

export const TitleContainer = styled.div`
  flex: 1;
`;

export const DateContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 2;
`;

export const ToggleIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
`;
