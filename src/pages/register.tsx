import {
  Button,
  Box,
} from "@chakra-ui/core";
import { Formik, Form } from "formik";
import React from "react";
import { useLoginMutation } from "../generated/graphql";
import { InputField } from "../components/InputField";
import { Wrapper } from "../components/Wrapper";
import * as cardBackground from "../assets/cardBackgrounds/fond_carte_11.png";
import { WrapperCard } from "../components/WrapperCard";

export interface RegisterProps {
  variant?: "small" | "regular";
}
export const Register: React.FC<RegisterProps> = ({ variant = "regular" }) => {
  const [, login] = useLoginMutation();
  return (
    <Wrapper variant={variant}>
      <WrapperCard background={cardBackground}>
        <Formik
          initialValues={{ playerName: "", password: "" }}
          onSubmit={async (values, {setErrors}) => {
            const response = await login({ playername: values.playerName, password: values.password });
            if(response.data?.login.errors) {
              setErrors({
                playerName: "erreur mon grand !"
              });
            }
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
      </WrapperCard>
    </Wrapper>
  );
};

export default Register;
