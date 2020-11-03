import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
} from "@chakra-ui/core";
import { Formik, Form } from "formik";
import React from "react";
import { InputField } from "../components/InputField";
import { Wrapper } from "../components/Wrapper";

export interface RegisterProps {
  variant?: "small" | "regular";
}

const validateName = (_) => _;

export const Register: React.FC<RegisterProps> = ({variant = "regular"}) => {
  return (
    <Wrapper variant={variant}>
      <Formik
        initialValues={{ playerName: "", password: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ values, handleChange }) => (
          <Form>
           
            <InputField name="playerName" placeholder="your name" label="Player name"/>
            <InputField name="password" placeholder="password" label="Password"/>
            {/* <Button
            mt={4}
            variantColor="teal"
            isLoading={props.isSubmitting}
            type="submit"
          >
            Submit
          </Button> */}
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default Register;
