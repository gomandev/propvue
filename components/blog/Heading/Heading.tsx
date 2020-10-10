import React from "react";
import styled from "styled-components";
import img from "../../../public/form.jpg";
import { Container, Card } from "../../common";

const Heading = () => {
  return (
    <>
      <Header></Header>
      <Main>
        <Container width={90} smWidth={90}>
          <Flex>
            <Wrap1>
              <Date>September 20th 2020</Date>
              <Title>How To Grow Your Shopify With A Zero Headache</Title>
              <Author>By M.Awwal</Author>
              <Content>
                <H1>Balancing Creativity and Marketing</H1>
                <P>
                  Many e-commerce stores start small without the foundation to
                  eventually scale. Choosing a platform that makes it easy to
                  grow with your consumer base is essential, hence Full Fat
                  Commerce’s love for Shopify, which makes it easy to do so. Be
                  sure to pick a platform that supports growing and adding
                  features as your business does, allowing you to find your pace
                  and never need to switch management to do so. In a similar
                  vein, it’s important to keep a global mindset when starting
                  your business. Don’t forget that all of your decisions should
                  be focused on who your e-commerce company can become in time,
                  and that means when your consumer base has expanded. The
                  beauty of e-commerce is that many businesses are eventually
                  presented with the ability to go global and reach
                  international markets. Don’t be confined to a geographical
                  region or overly specific product category, especially within
                  your name; rebranding later is far more of a headache than
                  having a brand name that’s a little more general.
                </P>
                <H1>Balancing Creativity and Marketing</H1>
                <P>
                  Many e-commerce stores start small without the foundation to
                  eventually scale. Choosing a platform that makes it easy to
                  grow with your consumer base is essential, hence Full Fat
                  Commerce’s love for Shopify, which makes it easy to do so. Be
                  sure to pick a platform that supports growing and adding
                  features as your business does, allowing you to find your pace
                  and never need to switch management to do so. In a similar
                  vein, it’s important to keep a global mindset when starting
                  your business. Don’t forget that all of your decisions should
                  be focused on who your e-commerce company can become in time,
                  and that means when your consumer base has expanded. The
                  beauty of e-commerce is that many businesses are eventually
                  presented with the ability to go global and reach
                  international markets. Don’t be confined to a geographical
                  region or overly specific product category, especially within
                  your name; rebranding later is far more of a headache than
                  having a brand name that’s a little more general.
                </P>
                <H1>Balancing Creativity and Marketing</H1>
                <P>
                  Many e-commerce stores start small without the foundation to
                  eventually scale. Choosing a platform that makes it easy to
                  grow with your consumer base is essential, hence Full Fat
                  Commerce’s love for Shopify, which makes it easy to do so. Be
                  sure to pick a platform that supports growing and adding
                  features as your business does, allowing you to find your pace
                  and never need to switch management to do so. In a similar
                  vein, it’s important to keep a global mindset when starting
                  your business. Don’t forget that all of your decisions should
                  be focused on who your e-commerce company can become in time,
                  and that means when your consumer base has expanded. The
                  beauty of e-commerce is that many businesses are eventually
                  presented with the ability to go global and reach
                  international markets. Don’t be confined to a geographical
                  region or overly specific product category, especially within
                  your name; rebranding later is far more of a headache than
                  having a brand name that’s a little more general.
                </P>
              </Content>
            </Wrap1>
            <Wrap2>
              <Wrap>
                <Inner>
                  <H>Share</H>
                  <Ul>
                    <Li>
                      <A href="#">
                        <i className="fab fa-facebook"></i>
                      </A>
                    </Li>
                    <Li>
                      <A href="#">
                        <i className="fab fa-twitter"></i>
                      </A>
                    </Li>
                    <Li>
                      <A href="#">
                        <i className="fab fa-instagram"></i>
                      </A>
                    </Li>
                    <Li>
                      <A href="#">
                        <i className="fab fa-linkedin"></i>
                      </A>
                    </Li>
                  </Ul>
                </Inner>
              </Wrap>
            </Wrap2>
          </Flex>
        </Container>
      </Main>
    </>
  );
};

const Content = styled.div`
  margin: 3em 0;
`;

const H1 = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.secondary};
  margin-bottom: 2em;
  max-width: 70%;
  font-weight: 200;
`;

const P = styled.p`
  color: ${({ theme }) => theme.secondary};
  letter-spacing: 1.5px;
  font-weight: 100;
  line-height: 1.6;
  font-size: 1.4rem;
`;

const Header = styled.div`
  background-image: url(${img});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  max-width: 100%;
  min-height: 400px;
`;

const Wrap = styled.div`
  position: fixed;
  left: 85%;
  top: 35%;
  right: 0;
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Inner = styled.div`
  margin: 2em;
`;

const Li = styled.li`
  margin-bottom: 3.5em;
`;

const H = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.primary};
  margin: 2em 0;
  text-align: center;
`;

const A = styled.a`
  font-size: 1.3rem;
  color: #fff;
  text-decoration: none;
  background: ${({ theme }) => theme.primary};
  border-radius: 50%;
  padding: 16px 20px;
  i {
    font-size: 1.3rem !important;
  }
`;

const Flex = styled.div`
  margin: 3em 1em;
  display: flex;
`;

const Wrap1 = styled.div`
  flex: 80%;
`;

const Wrap2 = styled.div`
  flex: 20%;
  position: relative;
`;

const Date = styled.span`
  background-color: ${({ theme }) => theme.primary};
  font-size: 1.1rem;
  padding: 15px 30px;
  color: #fff;
  font-weight: bold;
  font-variant: small-caps;
`;

const Title = styled.h1`
  font-size: 4rem;
  color: ${({ theme }) => theme.secondary};
  margin-top: 2em;
  max-width: 70%;
  font-weight: 200;
`;

const Author = styled.p`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.secondary};
  text-transform: uppercase;
`;

const Main = styled.main`
  margin-top: -8em;
  background-color: #fff;
  min-height: 1100px;
  max-width: 100%;
  margin-left: 7em;
`;

export default Heading;
