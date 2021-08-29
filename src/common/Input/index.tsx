import { withTranslation } from "react-i18next";
import { Container, StyledInput } from "./styles";
import { Label } from "../TextArea/styles";
import { InputProps } from "../types";

const Input = ({ name, placeholder, value, color, onChange }: InputProps) => (
  <Container>
    <Label
      htmlFor={name}
      style={{ color: color === "#aaaaaa" ? "#ffffff" : "#000000" }}
    >
      {name}
    </Label>
    <StyledInput
      placeholder={placeholder}
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      style={{ backgroundColor: color ?? "rgb(241, 242, 243)" }}
    />
  </Container>
);

export default withTranslation()(Input);
