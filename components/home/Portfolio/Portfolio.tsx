import React from "react";
import styled from "styled-components";
import { Container, Grid, Arrow } from "../../common";
import { min, max } from "../../helpers/device";
import img from "../../../public/work.jpg";

const Portfolio = () => {
  return (
    <>
      <Wrapper>
        <Container width={95} smWidth={90}>
          <Heading>Our Works</Heading>
          <Block>
            <Grid gap="gap" grid={2}>
              <div className="content">
                <Content>
                  <Title className="title">PWA Ecormmarce Web App</Title>
                  <Text className="hidden">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Dolorum itaque sunt facilis voluptatum facere ipsam quas
                    nobis, autem explicabo blanditiis labore necessitatibus
                    inventore eaque tenetur omnis distinctio perferendis
                    similique, deserunt accusamus quibusdam, quisquam ad. Qui
                    dolor iusto repudiandae doloremque nesciunt!
                  </Text>
                  <div className="hidden">
                    <Arrow color="#ffffff" end="23rem" />
                  </div>
                </Content>
              </div>
              <ImageWrapper></ImageWrapper>
            </Grid>
          </Block>
          <Block>
            <Grid gap="gap" grid={2}>
              <ImageWrapper></ImageWrapper>
              <div className="content">
                <Content>
                  <Title className="title">PWA Ecormmarce Web App</Title>
                  <Text className="hidden">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Dolorum itaque sunt facilis voluptatum facere ipsam quas
                    nobis, autem explicabo blanditiis labore necessitatibus
                    inventore eaque tenetur omnis distinctio perferendis
                    similique, deserunt accusamus quibusdam, quisquam ad. Qui
                    dolor iusto repudiandae doloremque nesciunt!
                  </Text>
                  <div className="hidden">
                    <Arrow color="#ffffff" end="23rem" />
                  </div>
                </Content>
              </div>
            </Grid>
          </Block>
          <Block>
            <Grid gap="gap" grid={2}>
              <div className="content">
                <Content>
                  <Title className="title">PWA Ecormmarce Web App</Title>
                  <Text className="hidden">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Dolorum itaque sunt facilis voluptatum facere ipsam quas
                    nobis, autem explicabo blanditiis labore necessitatibus
                    inventore eaque tenetur omnis distinctio perferendis
                    similique, deserunt accusamus quibusdam, quisquam ad. Qui
                    dolor iusto repudiandae doloremque nesciunt!
                  </Text>
                  <div className="hidden">
                    <Arrow color="#ffffff" end="23rem" />
                  </div>
                </Content>
              </div>
              <ImageWrapper></ImageWrapper>
            </Grid>
          </Block>
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

const Block = styled.div`
  max-width: 100%;
  // margin-top: 2rem;
  padding: 0;
  background: #fff;
  min-height: 7rem;
  box-shadow: 17px 17px 34px #cbcdd2, -17px -17px 34px #eff1f7;
  cursor: pointer;
  .stuffs {
    position: relative;
    background-color: ${({ theme }) => theme.primary};
    // min-height: 500px;
    margin: 0;
  }
  &:hover {
    .content {
      position: relative;
      background-color: ${({ theme }) => theme.primary};
      min-height: 485px;
      max-width: 100%;
      margin: 0;
      -webkit-transition: all 0.4s ease-in-out 0s;
      -moz-transition: all 0.4s ease-in-out 0s;
      -ms-transition: all 0.4s ease-in-out 0s;
      -o-transition: all 0.4s ease-in-out 0s;
      transition: all 0.4s ease-in-out 0s;
      @media ${max.tablet} and ${min.mobileL} {
        min-height: 285px;
      }
      &:after {
        // content: "";
        // position: absolute;
        // -webkit-transition: all 0.6s ease-in 0.1s;
        // -moz-transition: all 0.6s ease-in 0.1s;
        // -ms-transition: all 0.6s ease-in 0.1s;
        // -o-transition: all 0.6s ease-in 0.1s;
        // transition: all 0.6s ease-in 0.1s;
        // top: 0;
        // left: 0;
        // height: 100%;
        // width: 100%;
        // background: #000;
        // opacity: 0.68;
      }

      .hidden {
        visibility: visible;
        color: #fff;
      }

      .title {
        color: #fff;
      }
    }
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
  color: ${({ theme }) => theme.secondary};
  font-size: 2.2rem;
  font-weight: bold;
  @media ${max.tablet} and ${min.mobileL} {
    font-size: 1.7rem;
    font-weight: 600;
  }
`;

const Text = styled.p`
  margin-top: 8rem;
  color: ${({ theme }) => theme.secondary};
  font-size: 1.3rem;
  font-weight: 100;
  letter-spacing: 2px;
  @media ${max.tablet} and ${min.mobileL} {
    font-size: 1.3rem;
    letter-spacing: 1px;
    margin-top: 3rem;
  }
`;

export default Portfolio;
