import { Box, Flex, Button, useToast } from "@chakra-ui/core";
import { Formik, Form } from "formik";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { FunctionComponent, useEffect } from "react";
import { InputField } from "../../components/InputField";
import { Wrapper } from "../../components/Wrapper";
import { WrapperCard } from "../../components/WrapperCard";
import { server } from "../../constants";
import { useActivateAccountMutation } from "../../generated/graphql";
import { withUrqlClient, WithUrqlProps } from "next-urql";
import { createUrqlClient } from "../../utils/createUrqlClient";

export const ActivateAccount: NextPage<{
  token: string;
  variant?: "regular" | "small";
}> = ({ token, variant = "regular" }) => {
  const router = useRouter();
  const [, activateAccount] = useActivateAccountMutation();

  const goToLogin = () => {
    router.push("/login");
  };

  useEffect(() =>  {
      activateAccount({token})
    }, [token] )

  return (
    <Wrapper variant={variant}>
      <WrapperCard background={`${server}/assets/fond_carte_09.png`}>
        <Flex p={2} flexDirection="column" alignItems={"center"}>
          Account activated !
          <Button variantColor="teal" onClick={goToLogin}>
            Go to Login
          </Button>
        </Flex>
      </WrapperCard>
    </Wrapper>
  );
};

ActivateAccount.getInitialProps = ({ query }) => ({
  token: query.token as string,
});

export default withUrqlClient(createUrqlClient)(ActivateAccount as FunctionComponent<WithUrqlProps>);
