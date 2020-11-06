import {
  ThemeProvider,
  theme,
  ColorModeProvider,
  CSSReset,
} from "@chakra-ui/core";
import React from "react";
import { WrapperCard, WrapperCardProps } from "../components/WrapperCard";
import * as cardBackground1 from "../assets/cardBackgrounds/fond_carte_01.png";
import * as cardBackground2 from "../assets/cardBackgrounds/fond_carte_11.png";
import * as cardBackground3 from "../assets/cardBackgrounds/fond_carte_24.png";

export default {
  title: "Components/WrapperCard",
  component: WrapperCard,
};

const Story = (args: WrapperCardProps) => {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <WrapperCard {...args} />
      </ColorModeProvider>
    </ThemeProvider>
  );
};

export const Card1 = Story.bind({});
Card1.args = {
  background: cardBackground1,
};

export const Card2 = Story.bind({});
Card2.args = {
  background: cardBackground2,
};

export const Card3 = Story.bind({});
Card3.args = {
  background: cardBackground3,
};
