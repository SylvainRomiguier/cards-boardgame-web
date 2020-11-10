import {
  ThemeProvider,
  theme,
  ColorModeProvider,
  CSSReset,
} from "@chakra-ui/core";
import { Form, Formik } from "formik";
import React from "react";
import { InputField, InputFieldProps } from "../components/InputField";
import { Story } from "@storybook/react/types-6-0";

export default {
  title: "components/Input Field",
  component: InputField,
};

const Template: Story<InputFieldProps> = (args) => (
  <ThemeProvider theme={theme}>
    <ColorModeProvider>
      <CSSReset />
      <Formik
        initialValues={{ [args.name]: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ values, handleChange }) => (
          <Form>
            <InputField {...args} />
          </Form>
        )}
      </Formik>
    </ColorModeProvider>
  </ThemeProvider>
);

export const Simple = Template.bind({});
Simple.args = {
  name: "playerName",
  label: "Player Name",
  placeholder: "your name",
};

export const Password = Template.bind({});
Password.args = {
  name: "password",
  label: "Password",
  placeholder: "password",
  type: "password",
};
