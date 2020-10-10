import styled from "styled-components";
import React from "react";
import { min, max } from "../helpers/device";
interface IProps {
  size?: string;
  smSize?: any;
  children: any;
  bg: string;
  mt?: string;
  mb?: string;
  ml?: string;
  mr?: string;
  smMt?: string;
  smMb?: string;
  smMl?: string;
  smMr?: string;
  noPd: string;
  yesPd?: string;
  shadow: string;
  border?: string;
}

const Card: React.FC<IProps> = ({
  size,
  smSize,
  children,
  bg,
  mt,
  ml,
  mr,
  mb,
  smMt,
  smMl,
  smMr,
  smMb,
  noPd,
  yesPd,
  shadow,
  border,
}) => {
  let heigth;
  switch (size) {
    case "xsm":
      heigth = 8;
      break;
    case "sm":
      heigth = 17;
      break;
    case "md":
      heigth = 22;
      break;
    case "lg":
      heigth = 35;
      break;

    default:
      break;
  }
  let smHeigth;
  switch (smSize) {
    case "xsm":
      smHeigth = 80;
      break;
    case "sm":
      smHeigth = 17;
      break;
    case "md":
      smHeigth = 22;
      break;
    case "lg":
      smHeigth = 35;
      break;

    default:
      break;
  }
  return (
    <Wrapper
      data-testid="wrapper-card-booking"
      size={heigth}
      smSize={smHeigth}
      bg={bg}
      mt={mt}
      mb={mb}
      ml={ml}
      mr={mr}
      smMt={smMt}
      smMb={smMb}
      smMl={smMl}
      smMr={smMr}
      noPd={noPd}
      yesPd={yesPd}
      shadow={shadow}
      border={border}
    >
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: ${(props: IProps) => props.mt}rem;
  margin-left: ${(props: IProps) => props.ml}rem;
  margin-bottom: ${(props: IProps) => props.mb}rem;
  margin-right: ${(props: IProps) => props.mr}rem;
  @media ${max.tablet} and ${min.mobileL} {
    margin-top: ${(props: IProps) => props.smMt}rem;
    margin-left: ${(props: IProps) => props.smMl}rem;
    margin-bottom: ${(props: IProps) => props.smMb}rem;
    margin-right: ${(props: IProps) => props.smMr}rem;
    min-width: ${(props: IProps) => props.smSize}px;
    padding: ${(props: IProps) => (props.yesPd === "yes" ? `2.5rem` : `0rem`)};
  }
  @media ${max.tablet} {
    margin-top: ${(props: IProps) => props.smMt}rem;
    margin-left: ${(props: IProps) => props.smMl}rem !important;
    margin-bottom: ${(props: IProps) => props.smMb}rem;
    margin-right: ${(props: IProps) => props.smMr}rem;
    min-width: ${(props: IProps) => props.smSize}px;
    padding: ${(props: IProps) => (props.yesPd === "yes" ? `2.5rem` : `0rem`)};
  }
  position: relative;
  border-radius: 20px;
  border: ${(props: IProps) => props.border};
  min-height: ${(props: IProps) => props.size}rem;
  min-width: 200px;
  // min-height: 300px;
  width: auto;
  border-radius: 15px;
  background: ${(props: IProps) => props.bg};
  box-shadow: ${(props: IProps) =>
    props.shadow === "no"
      ? `none`
      : `17px 17px 34px #cbcdd2, -17px -17px 34px #eff1f7`};

  padding: ${(props: IProps) => (props.noPd === "no" ? `0rem` : `2.5rem`)};
`;

export default Card;
