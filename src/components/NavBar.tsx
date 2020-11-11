import { Box, Button, Flex, Link } from "@chakra-ui/core";
import React from "react";
import NextLink from "next/link";
import { useLogoutMutation, useMeQuery } from "../generated/graphql";
import {isServer} from "../utils/isServer";

export interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  const [{fetching: logoutFetching}, logout] = useLogoutMutation();
  const [{ data, fetching }] = useMeQuery({pause: isServer()});
  let body = null;
  if (fetching) {
    // Loading
  } else if (!data?.me) {
    body = (
      <>
        <NextLink href={"/login"}>
          <Link p={2} color={"white"}>
            login
          </Link>
        </NextLink>
        <NextLink href={"/register"}>
          <Link p={2} color={"white"}>
            register
          </Link>
        </NextLink>
      </>
    );
  } else {
    body = (
      <>
        <Box p={2} color={"white"}>{data.me.name}</Box>
        <Box p={2} color={"white"}>{data.me.email}</Box>
        <Box p={2} color={"white"}>Rank : {data.me.rank}</Box>
        <Button onClick={() => logout()} isLoading={logoutFetching} variant="link" color={"brown"}>Logout</Button>
      </>
    );
  }
  return (
    <Flex bg="tomato" p={4} justifyContent={"flex-end"}>
      {body}
    </Flex>
  );
};
