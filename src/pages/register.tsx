import { Button, Box, Flex, useToast } from "@chakra-ui/core";
import { Formik, Form } from "formik";
import React from "react";
import { useRegisterMutation } from "../generated/graphql";
import { InputField } from "../components/InputField";
import { Wrapper } from "../components/Wrapper";
import * as cardBackground from "../assets/cardBackgrounds/fond_carte_11.png";
import { WrapperCard } from "../components/WrapperCard";
import { toErrorMap } from "../utils/toErrorMap";
import { useRouter } from "next/router";

export interface RegisterProps {
  variant?: "small" | "regular";
}
export const Register: React.FC<RegisterProps> = ({ variant = "regular" }) => {
  const router = useRouter();
  const [, Register] = useRegisterMutation();
  const toast = useToast();
  return (
    <Wrapper variant={variant}>
      <WrapperCard background={cardBackground}>
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
              console.log(response.data?.createPlayer.player);
              // TODO : création player ok
              toast({
                title: "Player created",
                description: `${response.data.createPlayer.player.name} is alive !`,
                status: "success",
                isClosable: true
              });
              // router.push("/");
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

export default Register;
