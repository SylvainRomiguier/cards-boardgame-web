import { ThemeProvider, CSSReset, ColorModeProvider } from "@chakra-ui/core";
import { createClient, Provider } from "urql";
const client = createClient({
  url: "http://localhost:4000/graphql",
});

import theme from "../theme";

function MyApp({ Component, pageProps }) {
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
