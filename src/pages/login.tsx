import { Button, Box, Flex, Link } from "@chakra-ui/core";
import { Formik, Form } from "formik";
import React from "react";
import { useLoginMutation } from "../generated/graphql";
import { InputField } from "../components/InputField";
import { Wrapper } from "../components/Wrapper";
import { WrapperCard } from "../components/WrapperCard";
import { toErrorMap } from "../utils/toErrorMap";
import { useRouter } from "next/router";
import NextLink from "next/link";
import { server } from "../constants";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "../utils/createUrqlClient";

export interface LoginProps {
  variant?: "small" | "regular";
}
export const Login: React.FC<LoginProps> = ({ variant = "regular" }) => {
  const router = useRouter();
  const [, login] = useLoginMutation();

  return (
    <Wrapper variant={variant}>
      <WrapperCard background={`${server}/assets/fond_carte_09.png`}>
        <Formik
          initialValues={{ userName: "", password: "" }}
          onSubmit={async (values, { setErrors }) => {
            const response = await login({
              name: values.userName,
              password: values.password,
            });
            if (response.data?.login.errors) {
              setErrors(toErrorMap(response.data.login.errors));
            } else if (response.data?.login.user) {
              router.push("/");
            }
          }}
        >
          {({ values, handleChange, isSubmitting }) => (
            <Form>
              <Box p={2}>
                <InputField
                  name="userName"
                  placeholder="your name"
                  label="User name"
                />
              </Box>
              <Box p={2}>
                <InputField
                  name="password"
                  placeholder="password"
                  label="Password"
                  type="password"
                />
              </Box>
              <Flex p={2} justifyContent={"center"}>
                <Button
                  variantColor="teal"
                  isLoading={isSubmitting}
                  type="submit"
                >
                  Login
                </Button>
              </Flex>
              <Flex p={2} justifyContent={"center"}>
                <NextLink href={"/forgotten-password"}>
                  <Link p={2} color="teal">
                    Forgotten password ?
                  </Link>
                </NextLink>
              </Flex>
            </Form>
          )}
        </Formik>
      </WrapperCard>
    </Wrapper>
  );
};

export default withUrqlClient(createUrqlClient)(Login);
