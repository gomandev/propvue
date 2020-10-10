import React from "react";
import styled from "styled-components";
import img from "../../../public/form.jpg";
import { Container, Card, More } from "../../common";
import { min, max } from "../../helpers/device";

const Blog = () => {
  return (
    <>
      <Wrapper data-testid="blog-test">
        <Container smWidth={85} width={75}>
          <Heading>Blog</Heading>
          <Flex>
            <Card
              smMt="3"
              smMl="0"
              smMr="0"
              mr="2"
              shadow="no"
              noPd="no"
              size="md"
              bg="#fff"
            >
              <ImageWrapper>
                <Image src={img} />
              </ImageWrapper>
              <Buttom>
                <Title>How To Optimize Your Product</Title>
                <Content>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                  ducimus doloribus sapiente molestiae! Beatae quam, amet
                  aspernatur nam nobis minima numquam nemo dicta illum
                  asperiores iure voluptas, fuga vitae mollitia.
                </Content>
                <More text="Read More" color="#76B852" />
              </Buttom>
            </Card>
            <Card
              smMt="3"
              smMl="0"
              smMr="0"
              ml="2"
              shadow="no"
              noPd="no"
              size="md"
              bg="#fff"
            >
              <ImageWrapper>
                <Image src={img} />
              </ImageWrapper>
              <Buttom>
                <Title>How To Optimize Your Product</Title>
                <Content>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                  ducimus doloribus sapiente molestiae! Beatae quam, amet
                  aspernatur nam nobis minima numquam nemo dicta illum
                  asperiores iure voluptas, fuga vitae mollitia.
                </Content>
                <More text="Read More" color="#76B852" />
              </Buttom>
            </Card>
            <Card
              smMt="3"
              smMl="0"
              ml="2"
              smMr="0"
              shadow="no"
              noPd="no"
              size="md"
              bg="#fff"
            >
              <ImageWrapper>
                <Image src={img} />
              </ImageWrapper>
              <Buttom>
                <Title>How To Optimize Your Product</Title>
                <Content>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                  ducimus doloribus sapiente molestiae! Beatae quam, amet
                  aspernatur nam nobis minima numquam nemo dicta illum
                  asperiores iure voluptas, fuga vitae mollitia.
                </Content>
                <More text="Read More" color="#76B852" />
              </Buttom>
            </Card>
          </Flex>
        </Container>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div``;

const ImageWrapper = styled.div`
  min-height: 170px;
`;

const Buttom = styled.div`
  margin: 1.6em;
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

const Image = styled.img`
  width: 100%;
`;

const Title = styled.h1`
  font-size: 1.7rem;
  color: ${({ theme }) => theme.secondary};
  font-weight: bold;
`;

const Content = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.secondary};
  line-height: 1.6;
`;

const Flex = styled.div`
  display: flex;
  // justify-content: space-between;
  @media ${max.tablet} and ${min.mobileL} {
    flex-direction: column;
  }
  @media ${max.tablet} {
    flex-direction: column;
  }
`;

export default Blog;
