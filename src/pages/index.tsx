import { Grid } from "@chakra-ui/core";
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
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          {data.cards.map(c => 
          <WrapperCard background={c.picture} key={c.id}>
            {c.title}
            {c.text}
            {c.value}
            </WrapperCard>)}
        </Grid>
      )}
    </>
  );
};

export default withUrqlClient(createUrqlClient, {ssr: true})(Index);
