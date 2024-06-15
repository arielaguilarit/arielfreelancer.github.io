import styled from "styled-components";

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

export const Menu = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  right: 10px;
  bottom: 80px;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  overflow: hidden;
`;

export const MenuItem = styled.div`
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;
