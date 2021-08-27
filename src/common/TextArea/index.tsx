import { StyledTextArea, StyledContainer, Label } from "./styles";
import { InputProps } from "../types";

const TextArea = ({ name, placeholder, value, onChange }: InputProps) => (
  <StyledContainer>
    <Label htmlFor={name}>{name}</Label>
    <StyledTextArea
      placeholder={placeholder}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
    />
  </StyledContainer>
);

export default TextArea;
