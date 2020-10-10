import React from "react";
import styled from "styled-components";
import { radius } from "../helpers/radius";

interface IProps {
  text: string;
  color: string;
}

const More: React.FC<IProps> = ({ text, color }) => {
  return (
    <>
      <Wrapper data-testid="button-test" color={color}>
        {text}
        <Icon className="fas fa-chevron-right"></Icon>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.a`
  color: ${(props: IProps) => props.color};
  font-size: 1.2rem;
  border: none;
  cursor: pointer;
`;

const Icon = styled.i`
  color: ${(props: IProps) => props.color};
  font-size: 1.2rem !important;
  border-radius: 50%;
  margin-left: 0.5rem;
`;

export default More;
