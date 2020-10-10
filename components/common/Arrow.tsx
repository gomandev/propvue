import React from "react";
import styled from "styled-components";
import { radius } from "../helpers/radius";
import { min, max } from "../helpers/device";

interface IProps {
  color: string;
  end: string;
}

const Button: React.FC<IProps> = ({ color, end }) => {
  return (
    <>
      <Wrapper
        data-testid="button-test"
        role="button"
        aria-label="site button"
        color={color}
        end={end}
      >
        <i className="fas fa-arrow-right"></i>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.button`
  padding: 12px 25px;
  color: #76b852 !important;
  font-size: 1.2rem;
  background: ${(props: IProps) => props.color};
  border-radius: ${radius.buttonRadius};
  outline: none;
  border: none;
  cursor: pointer;
  margin-left: ${(props: IProps) => props.end};
  i {
    font-size: 2rem !important;
  }
  @media ${min.mobileL} and ${max.laptop} {
    margin-left: 13em;
    padding: 11px 23px;
    margin-top: 3rem;
  }
`;

export default Button;
