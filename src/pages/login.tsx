import { Button, Box, Flex } from "@chakra-ui/core";
import { Formik, Form } from "formik";
import React from "react";
import { useLoginMutation } from "../generated/graphql";
import { InputField } from "../components/InputField";
import { Wrapper } from "../components/Wrapper";
import * as cardBackground from "../assets/cardBackgrounds/fond_carte_09.png";
import { WrapperCard } from "../components/WrapperCard";
import { toErrorMap } from "../utils/toErrorMap";
import { useRouter } from "next/router";

export interface LoginProps {
  variant?: "small" | "regular";
}
export const Login: React.FC<LoginProps> = ({ variant = "regular" }) => {
  const router = useRouter();
  const [, login] = useLoginMutation();
  return (
    <Wrapper variant={variant}>
      <WrapperCard background={cardBackground}>
        <Formik
          initialValues={{ playerName: "", password: "" }}
          onSubmit={async (values, { setErrors }) => {
            const response = await login({
              playername: values.playerName,
              password: values.password,
            });
            if (response.data?.login.errors) {
              setErrors(toErrorMap(response.data.login.errors));
            } else if (response.data?.login.player) {
              router.push("/");
            }
          }}
        >
          {({ values, handleChange, isSubmitting }) => (
            <Form>
              <Box p={2}>
                <InputField
                  name="playerName"
                  placeholder="your name"
                  label="Player name"
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
            </Form>
          )}
        </Formik>
      </WrapperCard>
    </Wrapper>
  );
};

export default Login;
