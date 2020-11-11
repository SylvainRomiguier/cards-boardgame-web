import {
  ThemeProvider,
  theme,
  ColorModeProvider,
  CSSReset,
  Flex,
} from "@chakra-ui/core";
import React from "react";
import { WrapperCard, WrapperCardProps } from "../components/WrapperCard";
import { Story } from "@storybook/react/types-6-0";
import { server } from "../constants";

export default {
  title: "Components/WrapperCard",
  component: WrapperCard,
};

const fond1 = `${server}/assets/fond_carte_01.png`;
const fond2 = `${server}/assets/fond_carte_11.png`;
const fond3 = `${server}/assets/fond_carte_24.png`;

const Template: Story<WrapperCardProps> = (args) => {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <WrapperCard {...args}>
          <Flex justifyContent="center" alignItems="center" h="100%">Content</Flex>
        </WrapperCard>
      </ColorModeProvider>
    </ThemeProvider>
  );
};

export const Card1 = Template.bind({});
Card1.args = {
  background: fond1,
};

export const Card2 = Template.bind({});
Card2.args = {
  background: fond2,
};

export const Card3 = Template.bind({});
Card3.args = {
  background: fond3,
};
