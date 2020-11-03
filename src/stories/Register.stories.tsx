import {
  ThemeProvider,
  theme,
  ColorModeProvider,
  CSSReset,
} from "@chakra-ui/core";
import React from "react";
import { Register, RegisterProps } from "../pages/register";

export default {
  title: "Pages/Register",
  component: Register,
};

const Story = (args:RegisterProps) => (
  <ThemeProvider theme={theme}>
    <ColorModeProvider>
      <CSSReset />
      <Register {...args} />
    </ColorModeProvider>
  </ThemeProvider>
);

export const Regular = Story.bind({});
Regular.args = {
    variant: "regular"
};

export const Small = Story.bind({});
Small.args = {
    variant: "small"
};
