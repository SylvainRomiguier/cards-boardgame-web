import { Box, Flex, Button, useToast } from "@chakra-ui/core";
import { Formik, Form } from "formik";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { FunctionComponent } from "react";
import { InputField } from "../components/InputField";
import { Wrapper } from "../components/Wrapper";
import { WrapperCard } from "../components/WrapperCard";
import { server } from "../constants";
import { useForgotPasswordMutation } from "../generated/graphql";
import { withUrqlClient, WithUrqlProps } from "next-urql";
import { createUrqlClient } from "../utils/createUrqlClient";

export const ForgotPassword: NextPage<{ variant?: "regular" | "small" }> = ({
  variant = "regular",
}) => {
  const router = useRouter();
  const toast = useToast();
  const [, forgotPassword] = useForgotPasswordMutation();
  return (
    <Wrapper variant={variant}>
      <WrapperCard background={`${server}/assets/fond_carte_09.png`}>
        <Formik
          initialValues={{ email: "" }}
          onSubmit={async (values, { setErrors }) => {
            const response = await forgotPassword({
              email: values.email,
            });
            if (!response.data?.forgotPassword) {
              setErrors({ email: "Cette adresse email n'existe pas." });
            } else if (response.data?.forgotPassword) {
              toast({
                title: "Password Change Request",
                description:
                  "An email with a link to reset your password has been sent. The link will be valid for 10 minutes.",
                status: "success",
                isClosable: true,
              });
            }
          }}
        >
          {({ values, handleChange, isSubmitting }) => (
            <Form>
              <Box p={2}>
                <InputField
                  name="email"
                  placeholder="your email address"
                  label="Email Address"
                  type="email"
                />
              </Box>
              <Flex p={2} justifyContent={"center"}>
                <Button
                  variantColor="teal"
                  isLoading={isSubmitting}
                  type="submit"
                >
                  Send a link to reset my password
                </Button>
              </Flex>
            </Form>
          )}
        </Formik>
      </WrapperCard>
    </Wrapper>
  );
};

export default withUrqlClient(createUrqlClient)(
  ForgotPassword as FunctionComponent<WithUrqlProps>
);
