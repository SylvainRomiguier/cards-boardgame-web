import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
  Box,
} from "@chakra-ui/core";
import { Formik, Form } from "formik";
import { loadGetInitialProps } from "next/dist/next-server/lib/utils";
import React from "react";
import { useMutation } from "urql";
import { InputField } from "../components/InputField";
import { Wrapper } from "../components/Wrapper";

export interface RegisterProps {
  variant?: "small" | "regular";
}

const validateName = (_) => _;

const REGISTER_MUTATION = `mutation Login($playername: String!, $password: String!) {
  login(playerFields: { name: $playername, password: $password }) {
    errors {
      field
      message
    }
    player {id, name, email}
  }
}`;

export const Register: React.FC<RegisterProps> = ({ variant = "regular" }) => {
  const [,login] = useMutation(REGISTER_MUTATION);
  return (
    <Wrapper variant={variant}>
      <Formik
        initialValues={{ playerName: "", password: "" }}
        onSubmit={(values) => {
          console.log(values);
          login({playername: values.playerName, password: values.password});
        }}
      >
        {({ values, handleChange, isSubmitting }) => (
          <Form>
            <InputField
              name="playerName"
              placeholder="your name"
              label="Player name"
            />
            <Box mt={4}>
              <InputField
                name="password"
                placeholder="password"
                label="Password"
                type="password"
              />
            </Box>
            <Button
              mt={4}
              variantColor="teal"
              isLoading={isSubmitting}
              type="submit"
            >
              Register
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default Register;
