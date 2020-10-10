import React from "react";
import styled from "styled-components";
import img from "../../../public/logo.png";
import { min, max } from "../../helpers/device";

const Footer = () => {
  return (
    <Wrapper data-testid="footer-test">
      <Container>
        <Flex>
          <Flex1>
            <ImageWrapper>
              <Image src={img} />
            </ImageWrapper>
            <Text>&copy; 2020 By Succeso Ecommerce Development Team</Text>
          </Flex1>
          <Flex2>
            <Ul>
              <Li>
                <A href="#">Home</A>
              </Li>
              <Li>
                <A href="#">Portfolio</A>
              </Li>
              <Li>
                <A href="#">Blog</A>
              </Li>
            </Ul>
          </Flex2>
          <Flex3>
            <Flexinner>
              <Ul>
                <Li>
                  <I className="fab fa-facebook"></I>
                  <A href="#">facebook</A>
                </Li>
                <Li>
                  <I className="fab fa-linkedin"></I>
                  <A href="#">Linkedin</A>
                </Li>
                <Li>
                  <I className="fab fa-instagram"></I>
                  <A href="#">Instagram</A>
                </Li>
                <Li>
                  <I className="fab fa-medium"></I>
                  <A href="#">Medium</A>
                </Li>
              </Ul>
              <Right></Right>
              <Left>
                <Ul>
                  <Li>
                    <I className="fab fa-twitter"></I>
                    <A href="#">Twitter</A>
                  </Li>
                  <Li>
                    <I className="fab fa-behance"></I>
                    <A href="#">Behance</A>
                  </Li>
                  <Li>
                    <I className="fab fa-clutch"></I>
                    <A href="#">Clutch</A>
                  </Li>
                  <Li>
                    <I className="fab fa-upwork"></I>
                    <A href="#">Upwork</A>
                  </Li>
                </Ul>
              </Left>
            </Flexinner>
          </Flex3>
        </Flex>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  //   min-height: 200px;
  background: ${({ theme }) => theme.secondary};
  padding: 7em 0;
`;

const Container = styled.div`
  max-width: 90%;
  margin: auto;
  overflow: hidden;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  @media ${max.tablet} and ${min.mobileL} {
    flex-direction: column;
  }
`;

const Flex1 = styled.div`
  flex: 30%;
  @media ${max.tablet} and ${min.mobileL} {
    flex: 0%;
  }
`;

const Flex2 = styled.div`
  flex: 30%;
  @media ${max.tablet} and ${min.mobileL} {
    flex: 0%;
    margin-top: 1.3em;
  }
`;

const Flex3 = styled.div`
  flex: 40%;
  @media ${max.tablet} and ${min.mobileL} {
    flex: 0%;
    margin-top: 1.3em;
  }
`;

const ImageWrapper = styled.div`
  max-width: 90px;
`;

const Image = styled.img`
  width: 100%;
`;

const Text = styled.p`
  font-size: 1.5rem;
  color: #fff;
`;

const Ul = styled.ul``;

const Li = styled.li`
  list-style: none;
  margin-top: 1.3em;
`;

const A = styled.a`
  text-decoration: none;
  color: #fff;
  font-size: 1.3rem;
`;

const I = styled.i`
  color: #fff;
  font-size: 1.3rem !important;
  margin-right: 1em;
`;

const Flexinner = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div``;

const Right = styled.div``;

export default Footer;
