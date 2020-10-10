import React from "react";
import styled from "styled-components";
import Tabs from "./Tabs";

const TabContainer = () => {
  return (
    <>
      <Tabs>
        <div label="Shopify Development">
          <Heading>Shopify Development</Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit cum quam culpa earum natus fugiat numquam debitis quisquam harum hic, sit nam possimus veritatis! Atque, modi repellat. Ipsam, distinctio impedit!
          </Text>
        </div>
        <div label="Shopify Customization">
          <Heading>Shopify Customization</Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit cum quam culpa earum natus fugiat numquam debitis quisquam harum hic, sit nam possimus veritatis! Atque, modi repellat. Ipsam, distinctio impedit!
          </Text>
        </div>
        <div label="Shopify Marketing">
          <Heading>Shopify Marketing</Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit cum quam culpa earum natus fugiat numquam debitis quisquam harum hic, sit nam possimus veritatis! Atque, modi repellat. Ipsam, distinctio impedit!
          </Text>
        </div>
      </Tabs>
    </>
  );
};

const Heading = styled.h1`
  font-size: 3rem;
  color: ${({theme}) => theme.secondary};
  font-weight: bold;
  margin-bottom: 1em;
`;

const Text = styled.p`
  font-size: 1.3rem;
  color: ${({theme}) => theme.secondary};
  font-weight: bold;
  margin-top: 1em;
  line-height: 1.4;
`;

export default TabContainer;
