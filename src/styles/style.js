import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AppContainer = styled.div`
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;

  footer {
    text-align: center;
    padding: 6px;
    font-size: 12px;

    span {
      color: blueviolet;
      font-weight: bold;
      cursor: pointer;
    }
  }
`;

export const ContainerForm = styled.div`
  padding-inline: 20px;
  display: flex;
  justify-content: center;
  width: 100%;
`;
