import styled from "styled-components";

export const Container = styled.main`
  position: relative;
  display: grid;
  grid-template-areas: "aside main";
  grid-template-columns: minmax(min-content, 300px) minmax(200px, 1fr);
  grid-template-rows: 100%;
  color: black;
  width: 100%;
  overflow-y: auto;
  height: 100vh;

  @media (max-width: 424px) {
    grid-template-areas:
      "aside"
      "main";
    grid-template-columns: auto;
    grid-template-rows: auto;
  }
`;

export const Aside = styled.aside`
  grid-area: aside;
  background-color: green;
  position: fixed;
  height: 100vh;
  width: 300px;
`;

export const Main = styled.section`
  grid-area: main;

  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8px;
    min-height: 100vh;
    padding: 24% 13%;
    min-width: 100%;
    @media (max-width: 424px) {
      height: auto;
    }
  }

  & > section:nth-child(odd) {
    background-color: #77de68;
  }

  & > section:nth-child(even) {
    background-color: #a6ff92;
  }
`;

export const MenuButton = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: yellow;
  position: fixed;
  right: 10px;
  bottom: 20px;
  border-radius: 50%;
  cursor: pointer;
`;

export const SubTitle = styled.h2`
  text-align: start;
  font-size: 36px;
  font-weight: 800;
`;
