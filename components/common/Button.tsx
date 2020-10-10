import React from "react";
import styled from "styled-components";
import { radius } from "../helpers/radius";

interface IProps {
  text: string;
  color: string;
}

const Button: React.FC<IProps> = ({ text, color }) => {
  return (
    <>
      <Wrapper
        data-testid="button-test"
        role="button"
        aria-label="site button"
        color={color}
      >
        {text}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.button`
  padding: 15px 60px;
  color: #fff;
  font-size: 1.2rem;
  background: ${(props: IProps) => props.color};
  border-radius: ${radius.buttonRadius};
  outline: none;
  border: none;
  cursor: pointer;
`;

export default Button;
