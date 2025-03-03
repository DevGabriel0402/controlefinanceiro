import styled from "styled-components";

export const ListContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-top: 20px;
  background-color: #fff;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  overflow: hidden;

  @media (max-width: 550px) {
    max-width: 550px;
    padding-inline: 20px;
  }
`;

export const ListHeader = styled.div`
  background-color: #f0f0f0;
  padding: 10px 15px;
  border-bottom: 1px solid #ddd;

  h3 {
    margin: 0;
    color: #333;
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: 350px;
  overflow-y: auto;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
  border-bottom: 1px solid #eee;
  position: relative;

  &:hover {
    background-color: #f9f9f9;

    .delete-btn {
      opacity: 1;
    }
  }

  .info {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .desc {
    font-weight: 500;
  }

  .valor {
    color: ${(props) => (props.tipo === "Entrada" ? "green" : "red")};
    font-weight: 500;
  }

  .tipo {
    background-color: ${(props) =>
      props.tipo === "Entrada"
        ? "rgba(0, 128, 0, 0.1)"
        : "rgba(255, 0, 0, 0.1)"};
    color: ${(props) => (props.tipo === "Entrada" ? "green" : "red")};
    padding: 3px 8px;
    border-radius: 3px;
    font-size: 12px;
    margin: 0 10px;
  }

  .delete-btn {
    background-color: #ff6b6b;
    color: white;
    border: none;
    border-radius: 3px;
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: 1;
    transition: opacity 0.2s;

    &:hover {
      background-color: #ff5252;
    }
  }
`;

export const EmptyMessage = styled.div`
  padding: 20px;
  text-align: center;
  color: #26262650;
  font-style: italic;
`;
