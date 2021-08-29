import { StyledTextArea, StyledContainer, Label } from "./styles";
import { InputProps } from "../types";

const TextArea = ({
  name,
  placeholder,
  value,
  color,
  onChange,
}: InputProps) => (
  <StyledContainer>
    <Label
      htmlFor={name}
      style={{ color: color === "#aaaaaa" ? "#ffffff" : "#000000" }}
    >
      {name}
    </Label>
    <StyledTextArea
      placeholder={placeholder}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      style={{ backgroundColor: color ?? "rgb(241, 242, 243)" }}
    />
  </StyledContainer>
);

export default TextArea;
