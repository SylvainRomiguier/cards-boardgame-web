import {
  ThemeProvider,
  theme,
  ColorModeProvider,
  CSSReset,
} from "@chakra-ui/core";
import React from "react";
import { WrapperCard, WrapperCardProps } from "../components/WrapperCard";
import { Story } from "@storybook/react/types-6-0";
import * as cardBackground1 from "../assets/cardBackgrounds/fond_carte_01.png";
import * as cardBackground2 from "../assets/cardBackgrounds/fond_carte_11.png";
import * as cardBackground3 from "../assets/cardBackgrounds/fond_carte_24.png";

export default {
  title: "Components/WrapperCard",
  component: WrapperCard,
};

const Template: Story<WrapperCardProps> = (args) => {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <WrapperCard {...args} />
      </ColorModeProvider>
    </ThemeProvider>
  );
};

export const Card1 = Template.bind({});
Card1.args = {
  background: cardBackground1,
};

export const Card2 = Template.bind({});
Card2.args = {
  background: cardBackground2,
};

export const Card3 = Template.bind({});
Card3.args = {
  background: cardBackground3,
};
