import React from "react";
import styled from "styled-components";
import { Container, Grid, Input, InputBtn, Form, Select } from "../../common";
import { useForm } from "react-hook-form";
import { min, max } from "../../helpers/device";

type Inputs = {
  example: string;
  exampleRequired: string;
};

const Quote = () => {
  const { register, handleSubmit, watch, errors } = useForm<Inputs>();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example"));
  return (
    <>
      <Wrapper data-testid="quote-test">
        <Container smWidth={100} width={70}>
          <Card>
            <Grid yes="yes" grid={2}>
              <Left>
                <Heading>Get A Quote</Heading>
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <Input
                    name="name"
                    text="Name"
                    placeholder="John Deo"
                    ref={register}
                  />
                  <Input
                    name="phone"
                    text="Phone"
                    placeholder="+1 255 5666"
                    ref={register}
                  />
                  <Input
                    name="email"
                    text="Email"
                    placeholder="johndeo@example.com"
                    ref={register}
                  />
                  <Input
                    name="message"
                    text="Message"
                    placeholder="Say Something"
                    ref={register}
                  />
                  <Select name="message" text="Select" ref={register}>
                    <Option selected disabled>
                      Select Your Interest
                    </Option>
                    <Option>Shopify Development</Option>
                    <Option>Shopify Customization</Option>
                    <Option>Shopify Optimization</Option>
                    <Option>Shopify Marketing</Option>
                  </Select>
                  <InputBtn color="#76B852" text="Send" />
                </Form>
              </Left>
              <Right>
                <InnerWrapper>
                  <Inner>
                    <Block>
                      <Title>Main Office</Title>
                      <Text>Akin Adesola St Victoria Island Lagos</Text>
                    </Block>
                    <Block>
                      <Title>Sales Office</Title>
                      <Text>Talin Estonia</Text>
                    </Block>
                    <Block>
                      <Title>Email</Title>
                      <Text>hello@succeso.com</Text>
                    </Block>
                    <Block>
                      <Title>Phone</Title>
                      <Text>+234 81 643 705 21</Text>
                    </Block>
                  </Inner>
                </InnerWrapper>
              </Right>
            </Grid>
          </Card>
        </Container>
      </Wrapper>
    </>
  );
};

const Card = styled.div`
  border-radius: 20px;
  min-height: 500px;
  min-width: 200px;
  width: auto;
  background: #fff;
  box-shadow: 20px 20px 60px #c9cccf, -20px -20px 60px #ffffff;
  padding: 2.5em;
`;

const Option = styled.option`
  color: ${({ theme }) => theme.secondary} !important;
`;

const Title = styled.h2`
  font-size: 1.1rem;
  color: #fff;
  margin: 0;
`;

const Block = styled.div`
  // display: flex;
  // flex-direction: column;
  margin-top: 2em;
`;

const Text = styled.p`
  font-size: 1.3rem;
  color: #fff;
  font-weight: 100;
`;

const InnerWrapper = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.primary};
  min-height: 500px;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: #000;
    opacity: 0.68;
  }
`;

const Inner = styled.div`
  margin: 3em;
  position: absolute;
  z-index: 3;
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  margin: 4em 0;
`;

const Left = styled.div``;

const Right = styled.div``;

const Heading = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  color: ${({ theme }) => theme.secondary};
  margin-bottom: 1em;
  @media ${max.tablet} and ${min.mobileL} {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1.5em;
  }
`;

export default Quote;
