import { withTranslation } from "react-i18next";
import { Container, StyledInput } from "./styles";
import { Label } from "../TextArea/styles";
import { InputProps } from "../types";

const Input = ({ name, placeholder, value, onChange }: InputProps) => (
  <Container>
    <Label htmlFor={name}>{name}</Label>
    <StyledInput
      placeholder={placeholder}
      name={name}
      id={name}
      value={value}
      onChange={onChange}
    />
  </Container>
);

export default withTranslation()(Input);
