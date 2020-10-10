import React from "react";
import styled from "styled-components";
import { radius } from "../helpers/radius";

interface IProps {
  text?: string;
  color?: string;
}

const InputBtn: React.FC<IProps> = ({ text, color }) => {
  return (
    <>
      <Input
        data-testid="inputbtn-test"
        value={text}
        type="submit"
        color={color}
      />
    </>
  );
};

const Input = styled.input`
  padding: 15px 4rem;
  color: #fff;
  font-size: 1.3rem;
  font-weight: bold;
  background: ${(props: IProps) => props.color};
  border-radius: ${radius.buttonRadius};
  outline: none;
  border: none;
  cursor: pointer;
`;

export default InputBtn;
