import React from "react";
import styled from "styled-components";

interface IProps {
  text?: string;
  placeholder?: string;
  name?: string;
  ref?: Function;
}

const Input: React.FC<IProps> = ({ text, placeholder, name, ref }) => {
  return (
    <Wrapper data-testid="input-test">
      <InputField role="input" aria-label="input field" ref={ref} name={name} placeholder={placeholder} />
      <Hr />
      <Label>{text}</Label>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 2em;
  max-width: 100%;
  padding: 0;
  position: relative;
  border: none;
  overflow: visible;
`;

const InputField = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 12px 10px 8px;
  border: none;
  border-radius: 0;
  box-shadow: none;
  border-bottom: 1px solid #ddd;
  font-size: 1.1rem;
  outline: none;
  cursor: text;
  background: transparent;

  &::-webkit-input-placeholder {
    transition: color 300ms ease;
  }
  &:not(:focus)::-webkit-input-placeholder {
    color: transparent;
  }
  &:focus ~ hr {
    transform: scaleX(1);
    visibility: visible;
  }

  &:focus ~ label,
  &:valid ~ label {
    transform: scale(0.6);
  }
`;

const Hr = styled.hr`
  content: "";
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 2px;
  border: none;
  background: ${({ theme }) => theme.secondary};
  font-size: 1px;
  will-change: transform, visibility;
  transition: all 200ms ease-out;
  transform: scaleX(0);
  visibility: hidden;
  z-index: 10;
`;

const Label = styled.label`
  position: absolute;
  top: 10px;
  left: 10px;
  color: ${({ theme }) => theme.secondary};
  transform-origin: 0 -150%;
  transition: transform 300ms ease;
  pointer-events: none;
`;

export default Input;
