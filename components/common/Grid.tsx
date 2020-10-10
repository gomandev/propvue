import React from "react";
import styled from "styled-components";
import { max, min } from "../helpers/device";

interface IProps {
  children: any;
  grid: number;
  yes?: string;
  gap?: string;
}

const Grid: React.FC<IProps> = ({ grid, children, yes, gap }) => {
  return (
    <Wrapper
      data-testid="wrapper-grids-helpers"
      grid={grid}
      gap={gap}
      yes={yes}
    >
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  z-index: 99;
  justify-content: space-between;
  align-items: center;
  grid-template-columns: repeat(${(props: IProps) => props.grid}, 1fr);
  column-gap: ${(props: IProps) => (props.gap === "gap" ? `0rem` : `5rem`)};
  @media ${max.tablet} and ${min.mobileL} {
    grid-template-columns: 1fr;
  }
  @media ${max.tablet} {
    grid-template-columns: ${(props: IProps) =>
      props.yes === "yes"
        ? `1fr`
        : `repeat(${(props: IProps) => props.grid}, 1fr)`};
  }
`;

export default Grid;
