import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  border: 1px solid #26262620;
  padding: 20px;
  padding-top: 40px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 550px) {
    flex-wrap: wrap;
  }

  div {
    .select-icon {
      position: absolute;
      right: 5px;
      margin-bottom: 8px;
      font-size: 14px;
      width: 15px;
      pointer-events: none;
    }
  }
`;

export const InputContainer = styled.div`
  position: relative;

  input {
    width: 100%;
    max-width: 200px;
    padding: 5px;
    border: 1px solid #26262650;
    border-top: none;
    border-left: none;
    border-right: none;
    outline: none;
    caret-color: blueviolet;
  }
  label {
    position: absolute;
    top: 0;
    left: 5px;
    color: #26262650;
    transition: all 0.3s;
  }
  input:focus ~ label,
  input:not(:placeholder-shown) ~ label {
    top: -15px;
    font-size: 10px;
    color: blueviolet;
  }

  input:focus,
  input:not(:placeholder-shown) {
    border-color: blueviolet;
  }

  @media (max-width: 550px) {
    input {
      max-width: 140px;
      width: 100%;
    }
  }
`;

export const Select = styled.select`
  width: 200px;
  max-width: 200px;
  border: 1px solid #26262650;
  border-top: none;
  border-left: none;
  border-right: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  outline: none;
  font-size: 16px;
  margin-bottom: 8px;
  padding: 5px;
  color: blueviolet;
  background-color: transparent;

  @media (max-width: 550px) {
    max-width: 200px;
  }

  option {
    border: none;
    color: #262626;
    padding-inline: 5px;
  }

  option:hover {
    background-color: blueviolet;
  }
`;

export const Button = styled.button`
  padding: 10px;
  background-color: blueviolet;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: #262626;
  }
`;
