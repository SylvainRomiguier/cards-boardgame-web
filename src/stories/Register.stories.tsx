import {
    ThemeProvider,
    theme,
    ColorModeProvider,
    CSSReset,
  } from "@chakra-ui/core";
  import React from "react";
  import { Register, RegisterProps } from "../pages/register";
  import { Story } from "@storybook/react/types-6-0";
  
  export default {
    title: "Pages/Register",
    component: Register,
  };
  
  const Template: Story<RegisterProps> = (args) => (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <Register {...args} />
      </ColorModeProvider>
    </ThemeProvider>
  );
  
  export const Regular = Template.bind({});
  Regular.args = {
    variant: "regular",
  };
  
  export const Small = Template.bind({});
  Small.args = {
    variant: "small",
  };
  