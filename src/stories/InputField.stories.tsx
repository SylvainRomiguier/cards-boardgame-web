import {
  ThemeProvider,
  theme,
  ColorModeProvider,
  CSSReset,
} from "@chakra-ui/core";
import { Form, Formik } from "formik";
import React from "react";
import { InputField, InputFieldProps } from "../components/InputField";

export default {
  title: "components/Input Field",
  component: InputField,
};

const Story = (args: InputFieldProps) => (
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

export const Simple = Story.bind({});
Simple.args = {
  name: "playerName",
  label: "Player Name",
  placeholder: "your name"
};

export const Password = Story.bind({});
Password.args = {
  name: "password",
  label: "Password",
  placeholder: "password",
  type: "password"
};
