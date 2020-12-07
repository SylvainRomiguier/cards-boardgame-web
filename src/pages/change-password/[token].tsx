import { Box, Flex, Button, useToast } from '@chakra-ui/core';
import { Formik, Form } from 'formik';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { FunctionComponent } from 'react';
import { InputField } from '../../components/InputField';
import { Wrapper } from '../../components/Wrapper';
import { WrapperCard } from '../../components/WrapperCard';
import { server } from '../../constants';
import { useChangePasswordMutation } from '../../generated/graphql';
import { withUrqlClient, WithUrqlProps } from "next-urql";
import { createUrqlClient } from "../../utils/createUrqlClient";
import { toErrorMap } from '../../utils/toErrorMap';

export const ChangePassword: NextPage<{token: string, variant?: "regular" | "small"}> = ({token, variant = "regular"}) => {
    const router = useRouter();
    const toast = useToast();
    const [, changePassword] = useChangePasswordMutation();
        return (
            <Wrapper variant={variant}>
            <WrapperCard background={`${server}/assets/fond_carte_09.png`}>
              <Formik
                initialValues={{ newPassword: "" }}
                onSubmit={async (values, { setErrors }) => {
                  const response = await changePassword({
                    token: token,
                    newPassword: values.newPassword,
                  });
                  if(response.data?.changePassword.errors) {
                  setErrors(toErrorMap(response.data.changePassword.errors));
                  toast({
                    title: "Error",
                    description: "please follow the instructions.",
                    status: "warning",
                    isClosable: true
                  });
                } else if (response.data?.changePassword.player) {
                    toast({
                        title: "Password changed",
                        description: "The password has been successfully changed.",
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
                        name="newPassword"
                        placeholder="your new password"
                        label="New Password"
                        type="password"
                      />
                    </Box>
                    <Flex p={2} justifyContent={"center"}>
                      <Button
                        variantColor="teal"
                        isLoading={isSubmitting}
                        type="submit"
                      >
                        Reset my password
                      </Button>
                    </Flex>
                  </Form>
                )}
              </Formik>
            </WrapperCard>
          </Wrapper>
        );
}

ChangePassword.getInitialProps = ({query}) => ({token: query.token as string});

export default withUrqlClient(createUrqlClient)(ChangePassword as FunctionComponent<WithUrqlProps>);