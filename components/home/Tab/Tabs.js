import React, {Component, ReactElement} from "react";
import styled from "styled-components";
import Tab from "./Tab";
import { Container, Card, Grid } from '../../common';
import { min, max } from "../../helpers/device";


class Tabs extends Component {

  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.children[0].props.label,
    };
  }

  onClickTabItem = (tab) => {
    this.setState({ activeTab: tab });
  }

  render() {
    const {
      onClickTabItem,
      props: {
        children,
      },
      state: {
        activeTab,
      }
    } = this;

    return (
      <TabWrapper>
        <Container width={80}>
          <Title>What We Offer</Title>
          <Grid grid={2}>
            <TabList>
              <Card bg="#76B852" noPd="no" size="md" mb="2">
                <Wrap>
                  <Icon className="fab fa-shopify"></Icon>
                </Wrap>
                <Span>
                  {children.map((child) => {
                    const { label } = child.props;

                    return (
                      <Tab
                        activeTab={activeTab}
                        key={label}
                        label={label}
                        onClick={onClickTabItem}
                      />
                    );
                  })}
                </Span>
              </Card>
            </TabList>
            <TabContent>
              {children.map((child) => {
                if (child.props.label !== activeTab) return undefined;
                return child.props.children;
              })}
            </TabContent>
          </Grid>
        </Container>
      </TabWrapper>
    );
  }
}

const Title = styled.h1`
  font-size: 4rem;
  color: ${({theme}) => theme.secondary};
  font-weight: bold;
  margin-bottom: 1em;
  @media ${max.tablet} and ${min.mobileL} {
    font-size: 2rem;
  }
`;

const Icon = styled.i`
  font-size: 4rem !important;
  color: #fff;
  text-align: center;
  margin-top: 0.5em;
`;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-item: center;
  text-align: center;
  margin-top: 3em;
`;

const TabWrapper = styled.div`
  margin: 5em 0;
`;

const TabList = styled.ol`
  display: block;
`;

const TabContent = styled.div``;

const Span = styled.span`
  margin: 1em;
  padding: 1em;
  color: #fff;
  font-size: 1.2rem;
`;

export default Tabs;
