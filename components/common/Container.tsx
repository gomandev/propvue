import React from "react";
import styled from "styled-components";
import { min, max } from "../helpers/device";

interface IProps {
  children: any;
  width: number;
  smWidth: number;
}

const Container: React.FC<IProps> = ({ children, width, smWidth }) => {
  return (
    <>
      <Wrapper data-testid="container-test" smWidth={smWidth} width={width}>
        {children}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  max-width: ${(props: IProps) => props.width}%;
  margin: auto;
  overflow: hidden;
  @media ${max.tablet} and ${min.mobileL} {
    max-width: ${(props: IProps) => props.smWidth}%;
  }
`;

export default Container;
