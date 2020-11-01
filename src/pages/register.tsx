import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
} from "@chakra-ui/core";
import {Formik, Form } from "formik";
import React from "react";

interface registerProps {}

const validateName = (_) => _;

export const Register: React.FC<registerProps> = ({}) => {
  return (
    <Formik
      initialValues={{ playerName: "", password: "" }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({values, handleChange}) => (
        <Form>
          <FormControl>
            <FormLabel htmlFor="playerName">Player name</FormLabel>
            <Input value={values.playerName} onChange={handleChange} id="playerName" placeholder="name" />
            {/* <FormErrorMessage>{form.errors.name}</FormErrorMessage> */}
          </FormControl>

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
  );
};

export default Register;
