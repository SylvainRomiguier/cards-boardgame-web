import {
    ThemeProvider,
    theme,
    ColorModeProvider,
    CSSReset,
  } from "@chakra-ui/core";
  import React from "react";
  import { Story } from "@storybook/react/types-6-0";
import { NavBar, NavBarProps } from "../components/NavBar";
  
  export default {
    title: "Components/NavBar",
    component: NavBar,
  };
  
  const Template: Story<NavBarProps> = (args) => (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <NavBar {...args} />
      </ColorModeProvider>
    </ThemeProvider>
  );
  
  export const Simple = Template.bind({});
  Simple.args = {
  };
  
  