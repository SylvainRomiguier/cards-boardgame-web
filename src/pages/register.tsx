import { Button, Box, Flex, useToast } from "@chakra-ui/core";
import { Formik, Form } from "formik";
import React from "react";
import { useRegisterMutation } from "../generated/graphql";
import { InputField } from "../components/InputField";
import { Wrapper } from "../components/Wrapper";
import { WrapperCard } from "../components/WrapperCard";
import { toErrorMap } from "../utils/toErrorMap";
import { useRouter } from "next/router";
import { server } from "../constants";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "../utils/createUrqlClient";

export interface RegisterProps {
  variant?: "small" | "regular";
}
export const Register: React.FC<RegisterProps> = ({ variant = "regular" }) => {
  const router = useRouter();
  const [, Register] = useRegisterMutation();
  const toast = useToast();
  return (
    <Wrapper variant={variant}>
      <WrapperCard background={`${server}/assets/fond_carte_11.png`}>
        <Formik
          initialValues={{ playerName: "", password: "", email: "" }}
          onSubmit={async (values, { setErrors }) => {
            const response = await Register({
              playername: values.playerName,
              password: values.password,
              email: values.email,
            });
            if (response.data?.createPlayer.errors) {
              setErrors(toErrorMap(response.data.createPlayer.errors));
              toast({
                title: "Error",
                description: "please follow the instructions.",
                status: "warning",
                isClosable: true
              });
            } else if (response.data?.createPlayer.player) {
              toast({
                title: "Player created",
                description: `An email has been sent to ${response.data.createPlayer.player.email} to activate your account.`,
                status: "success",
                isClosable: true
              });
              setTimeout(() => router.push("/login"), 3000);
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
                  required
                />
              </Box>
              <Box p={2}>
                <InputField
                  name="email"
                  placeholder="email"
                  label="Email"
                  type="email"
                  required
                />
              </Box>
              <Box p={2}>
                <InputField
                  name="password"
                  placeholder="password"
                  label="Password"
                  type="password"
                  required
                />
              </Box>
              <Flex p={2} justifyContent={"center"}>
                <Button
                  variantColor="teal"
                  isLoading={isSubmitting}
                  type="submit"
                >
                  Register
                </Button>
              </Flex>
            </Form>
          )}
        </Formik>
      </WrapperCard>
    </Wrapper>
  );
};

export default  withUrqlClient(createUrqlClient)(Register);
