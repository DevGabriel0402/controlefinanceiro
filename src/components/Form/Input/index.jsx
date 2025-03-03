import { InputContainer } from "../style";

export const Input = (props) => {
  return (
    <InputContainer>
      <input
        type="text"
        id={props.id}
        placeholder=""
        value={props.value}
        onChange={props.OnChange}
      />
      <label htmlFor={props.id}>{props.label}</label>
    </InputContainer>
  );
};
