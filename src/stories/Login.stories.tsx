import {
  ThemeProvider,
  theme,
  ColorModeProvider,
  CSSReset,
} from "@chakra-ui/core";
import React from "react";
import { Login, LoginProps } from "../pages/login";
import { Story } from "@storybook/react/types-6-0";

export default {
  title: "Pages/Login",
  component: Login,
};

const Template: Story<LoginProps> = (args) => (
  <ThemeProvider theme={theme}>
    <ColorModeProvider>
      <CSSReset />
      <Login {...args} />
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
