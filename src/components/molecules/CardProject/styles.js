import styled from "styled-components";

export const Card = styled.article`
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: space-between;
  border-radius: 8px;
  padding: 12px;
  gap: 8px;
  color: white;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 4px;

  & > div > p {
    font-size: 14px;
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 8px;
`;
