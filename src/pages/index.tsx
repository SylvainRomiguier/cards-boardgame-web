import { Box, Flex } from "@chakra-ui/core";
import { withUrqlClient } from "next-urql";
import React from "react";
import { NavBar } from "../components/NavBar";
import { WrapperCard } from "../components/WrapperCard";
import { useCardsQuery } from "../generated/graphql";
import { createUrqlClient } from "../utils/createUrqlClient";

const Index = () => {
  const [{ data }] = useCardsQuery();
  return (
    <>
      <NavBar />
      <div>Hello world !</div>
      {!data ? null : (
        <Box m="10">
          <Flex justify="space-between" align="center">
            {data.cards.map((c) => (
              <WrapperCard background={c.picture} key={c.id}>
                {c.title}
                {c.text}
                {c.value}
              </WrapperCard>
            ))}
          </Flex>
        </Box>
      )}
    </>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Index);
