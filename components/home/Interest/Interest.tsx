import React from "react";
import styled from "styled-components";
import { min, max } from "../../helpers/device";
import { Grid, Card, Container } from "../../common";

const Interest = () => {
  return (
    <Wrapper data-testid="interest-test">
      <Container width={70} smWidth={95}>
        <Heading>Industry</Heading>
        <Grid grid={2}>
          <Block>
            <Flex>
              <Block>
                <Card size="xsm" bg="#263238" noPd="no" shadow="no">
                  <P size="1.6" style={{ color: "#fff" }}>
                    Finace
                  </P>
                </Card>
                <Card
                  mt="1"
                  size="xsm"
                  smMt="2"
                  bg="#ffffff"
                  noPd="no"
                  shadow="no"
                >
                  <P size="1.6" style={{ color: "#000" }}>
                    Law
                  </P>
                </Card>
              </Block>
              <Block>
                <Card size="sm" bg="#76B852" smMt="2" noPd="no" shadow="no">
                  <P size="2" style={{ color: "#fff" }}>
                    Fintech
                  </P>
                </Card>
              </Block>
            </Flex>
          </Block>
          <Block>
            <Flex>
              <Block>
                <Card
                  size="xsm"
                  bg="transparent"
                  smMt="2"
                  border="#263238 3px solid"
                  noPd="no"
                  shadow="no"
                >
                  <P size="1.6" style={{ color: "#263238" }}>
                    Finace
                  </P>
                </Card>
                <Card
                  mt="1"
                  size="xsm"
                  smMt="2"
                  bg="#ffffff"
                  noPd="no"
                  shadow="no"
                >
                  <P size="1.6" style={{ color: "#000" }}>
                    Law
                  </P>
                </Card>
              </Block>
              <Block>
                <Card
                  size="sm"
                  bg="transparent"
                  smMt="2"
                  border="#76B852 3px solid"
                  noPd="no"
                  shadow="no"
                >
                  <P size="2" style={{ color: "#76B852" }}>
                    Fintech
                  </P>
                </Card>
              </Block>
            </Flex>
          </Block>
        </Grid>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  // //   min-height: 200px;
  // background: ${({ theme }) => theme.secondary};
  // padding: 7em 0;
  margin: 5em 0;
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

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  @media ${max.tablet} and ${min.mobileL} {
    flex-direction: column;
  }
  @media ${max.tablet} {
    flex-direction: column;
  }
`;

const P = styled.p`
  text-align: center;
  position: absolute;
  top: 20%;
  left: 0;
  right: 0;
  bottom: 0;
  font-size: ${(props: string) => props.size}rem;
  font-weight: 600;
`;

const Block = styled.div``;

export default Interest;
