import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1140px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 20px;
  position: relative;
`;

export const Card = styled.div`
  width: 30%;
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid #26262620;
  border-radius: 10px;
  background-color: ${(props) => props.bg || "#fafafa"};

  @media (min-width: 550px) {
    padding: 20px 20px;
  }

  .card-title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    h2 {
      font-size: 18px;
      text-align: center;
    }

    @media (max-width: 550px) {
      .card-title {
        justify-content: center;
      }
      h2 {
        font-size: 14px;
        text-align: center;
        width: 100%;
      }
      .icon {
        display: none;
      }
    }
  }

  .value {
    font-size: 24px;
    @media (max-width: 550px) {
      font-size: 14px;
      text-align: center;
    }
  }
`;
