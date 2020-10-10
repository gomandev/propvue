import React from "react";
import styled from "styled-components";
import { Container, Grid, More } from "../../common";
import { min, max } from "../../helpers/device";
import img from "../../../public/work.jpg";

const Recent = () => {
  return (
    <>
      <Wrapper>
        <Container width={85} smWidth={90}>
          <Heading>You Might Also Like This</Heading>
          <Grid grid={2}>
            <Card>
              <ImageWrapper>
                <Date>September 20th 2020</Date>
                <Image src={img} />
              </ImageWrapper>
              <Buttom>
                <Title>How To Optimize Your Product</Title>
                <More text="Read More" color="#ffffff" />
              </Buttom>
            </Card>
            <Card>
              <ImageWrapper>
                <Date>September 20th 2020</Date>
                <Image src={img} />
              </ImageWrapper>
              <Buttom>
                <Title>How To Optimize Your Product</Title>
                <More text="Read More" color="#ffffff" />
              </Buttom>
            </Card>
          </Grid>
        </Container>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  max-width: 100%;
  min-height: 750px;
  background-color: ${({ theme }) => theme.secondary};
  position: relative;
  margin: 3em 0;
`;

const Date = styled.span`
  background-color: ${({ theme }) => theme.primary};
  font-size: 1.1rem;
  padding: 15px 30px;
  color: #fff;
  font-weight: bold;
  font-variant: small-caps;
  position: absolute;
`;

const Card = styled.div`
  min-height: 10rem;
  max-width: 100%;
`;

const ImageWrapper = styled.div`
  height: 370px;
  position: relative;
`;

const Buttom = styled.div`
  margin: 1.6em;
`;

const Heading = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: #fff;
  margin: 1.2em 0;
  @media ${max.tablet} and ${min.mobileL} {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1.5em;
  }
`;

const Image = styled.img`
  width: 100%;
`;

const Title = styled.h1`
  margin-top: 1.5rem;
  font-size: 2.2rem;
  color: #ffffff;
  font-weight: bold;
`;

export default Recent;
