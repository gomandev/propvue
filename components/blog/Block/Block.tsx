import React from "react";
import styled from "styled-components";
import { Container, Grid, Arrow } from "../../common";
import { min, max } from "../../helpers/device";
import img from "../../../public/work.jpg";

const Block = () => {
  return (
    <>
      <Wrapper>
        <Container width={85} smWidth={90}>
          <Heading>Blog</Heading>
          <Card>
            <Grid gap="gap" grid={2}>
              <div className="content">
                <Content>
                  <Title className="title">Grow Your Store Rapidely</Title>
                  <Text>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Dolorum itaque sunt facilis voluptatum facere ipsam quas.
                  </Text>
                  <div>
                    <Arrow color="#ffffff" end="23rem" />
                  </div>
                </Content>
              </div>
              <ImageWrapper></ImageWrapper>
            </Grid>
          </Card>
          <Card>
            <Grid gap="gap" grid={2}>
              <ImageWrapper></ImageWrapper>
              <div className="content">
                <Content>
                  <Title className="title">PWA Ecormmarce Web App</Title>
                  <Text>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Dolorum itaque sunt facilis voluptatum facere ipsam quas.
                  </Text>
                  <div>
                    <Arrow color="#ffffff" end="23rem" />
                  </div>
                </Content>
              </div>
            </Grid>
          </Card>
          <Card>
            <Grid gap="gap" grid={2}>
              <div className="content">
                <Content>
                  <Title className="title">PWA Ecormmarce Web App</Title>
                  <Text>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Dolorum itaque sunt facilis voluptatum facere ipsam quas.
                  </Text>
                  <div>
                    <Arrow color="#ffffff" end="23rem" />
                  </div>
                </Content>
              </div>
              <ImageWrapper></ImageWrapper>
            </Grid>
          </Card>
        </Container>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  max-width: 100%;
`;

const Heading = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  color: ${({ theme }) => theme.secondary};
  @media ${max.tablet} and ${min.mobileL} {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1.5em;
  }
`;

const Card = styled.div`
  max-width: 100%;
  // margin-top: 2rem;
  padding: 0;
  background-color: ${({ theme }) => theme.primary};
  min-height: 485px;
  cursor: pointer;
  }
`;

const ImageWrapper = styled.div`
  background-image: url(${img});
  position: relative;
  background-color: ${({ theme }) => theme.primary};
  min-height: 485px;
  max-width: 100%;
  margin: 0;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  // height: 15rem;
  @media ${max.tablet} and ${min.mobileL} {
    min-height: 285px;
  }
`;

const Content = styled.div`
  margin: 2rem 3rem;
  @media ${max.tablet} and ${min.mobileL} {
    margin: 2rem 1rem;
  }
`;

const Title = styled.h1`
  color: #fff;
  font-size: 2.2rem;
  font-weight: bold;
  @media ${max.tablet} and ${min.mobileL} {
    font-size: 1.7rem;
    font-weight: 600;
  }
`;

const Text = styled.p`
  margin-top: 3rem;
  color: #fff;
  font-size: 1.3rem;
  font-weight: 100;
  letter-spacing: 2px;
  @media ${max.tablet} and ${min.mobileL} {
    font-size: 1.3rem;
    letter-spacing: 1px;
    margin-top: 3rem;
  }
`;

export default Block;
