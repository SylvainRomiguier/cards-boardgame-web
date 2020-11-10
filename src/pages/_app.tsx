import { ThemeProvider, CSSReset, ColorModeProvider } from "@chakra-ui/core";
import { AppProps } from "next/app";
import { createClient, dedupExchange, fetchExchange, Provider } from "urql";
import { cacheExchange, Cache, QueryInput } from "@urql/exchange-graphcache";
import "../custom.css";

function betterUpdateQuery<Result, Query>(
  cache: Cache,
  queryInput: QueryInput,
  result: any,
  fn: (r: Result, q: Query) => Query
) {
  return cache.updateQuery(
    queryInput,
    (data) => fn(result, data as any) as any
  );
}

const cache = cacheExchange({
  updates: {
    Mutation: {
      login: (_result, args, cache, info) => {
        betterUpdateQuery<LoginMutation, MeQuery>(
          cache,
          { query: MeDocument },
          _result,
          (result, query) => {
            if (result.login.errors) {
              return query;
            } else {
              return {
                me: result.login.player,
              };
            }
          }
        );
      },
      logout: (_result, args, cache, info) => {
        betterUpdateQuery<LogoutMutation, MeQuery>(
          cache,
          { query: MeDocument },
          _result,
          () => ({me: null})
        );
      },
    },
  },
});

const client = createClient({
  url: "http://localhost:4000/graphql",
  exchanges: [dedupExchange, cache, fetchExchange],
  fetchOptions: {
    credentials: "include",
  },
});

import theme from "../theme";
import { LoginMutation, LogoutMutation, MeDocument, MeQuery } from "../generated/graphql";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <Provider value={client}>
          <Component {...pageProps} />
        </Provider>
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default MyApp;
