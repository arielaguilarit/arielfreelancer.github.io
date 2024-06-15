import styled from "styled-components";

export const ContainerAvatar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;

  color: white;

  & > h1 {
    font-weight: bold;
  }

  & > p {
    text-align: center;
  }
`;

export const Img = styled.img`
  max-height: 160px;
  max-width: 160px;
  border-radius: 50%;
`;

export const Icons = styled.div`
  display: flex;
  gap: 36px;
`;
