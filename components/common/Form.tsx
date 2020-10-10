import React from "react";
import styled from "styled-components";

interface IProps {
  children?: any;
  onSubmit: () => void;
}

const Form: React.FC<IProps> = ({ children }) => {
  return <Wrapper data-testid="form-test">{children}</Wrapper>;
};

const Wrapper = styled.form`
  margin-bottom: 2em;
`;

export default Form;
