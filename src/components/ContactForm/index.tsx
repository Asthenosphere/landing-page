import { Row, Col } from "antd";
import { Slide, Zoom } from "react-awesome-reveal";
import { ContactProps, ValidationTypeProps } from "./types";
import { useForm } from "../../common/utils/useForm";
import validate from "../../common/utils/validationRules";
import { Button } from "../../common/Button";
import Block from "../Block";
import Input from "../../common/Input";
import TextArea from "../../common/TextArea";
import { ContactContainer, FormGroup, Span, ButtonContainer } from "./styles";
import useDarkMode from "use-dark-mode";

const Contact = ({ title, content, id }: ContactProps) => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    validate
  ) as any;

  const darkMode = useDarkMode(false);

  const ValidationType = ({ type }: ValidationTypeProps) => {
    const ErrorMessage = errors[type];
    return (
      <Zoom direction='left'>
        <Span erros={errors[type]}>{ErrorMessage}</Span>
      </Zoom>
    );
  };

  return (
    <ContactContainer id={id}>
      <Row justify='space-between' align='middle'>
        <Col lg={11} md={11} sm={11} xs={24}>
          <Slide direction='left'>
            <Block title={title} content={content} />
          </Slide>
        </Col>
        <Col lg={11} md={11} sm={12} xs={24}>
          <Slide direction='right'>
            <Row justify='center'>
              <FormGroup autoComplete='off' onSubmit={handleSubmit}>
                <Col span={24}>
                  <Input
                    type='text'
                    name='name'
                    placeholder='Your Name'
                    value={values.name || ""}
                    onChange={handleChange}
                    color={darkMode.value ? "#aaaaaa" : "rgb(241, 242, 243)"}
                  />
                  <ValidationType type='name' />
                </Col>
                <Col span={24}>
                  <Input
                    type='text'
                    name='email'
                    placeholder='Your Email'
                    value={values.email || ""}
                    onChange={handleChange}
                    color={darkMode.value ? "#aaaaaa" : "rgb(241, 242, 243)"}
                  />
                  <ValidationType type='email' />
                </Col>
                <Col span={24}>
                  <TextArea
                    placeholder='Your Message'
                    value={values.message || ""}
                    name='message'
                    onChange={handleChange}
                    color={darkMode.value ? "#aaaaaa" : "rgb(241, 242, 243)"}
                  />
                  <ValidationType type='message' />
                </Col>
                <ButtonContainer>
                  <Button
                    name='submit'
                    color={darkMode.value ? "#6CBDBD" : "#AEE6E6"}
                  >
                    Submit
                  </Button>
                </ButtonContainer>
              </FormGroup>
            </Row>
          </Slide>
        </Col>
      </Row>
    </ContactContainer>
  );
};

export default Contact;
