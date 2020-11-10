import { Box } from "@chakra-ui/core";
import React from "react";

interface WrapperProps {
  variant?: "small" | "regular";
}

export const Wrapper: React.FC<WrapperProps> = ({
  children,
  variant = "regular",
}) => {
  return (
    <Box
      p={variant === "regular" ? 4 : 2}
      mt={8}
      mx="auto"
      maxW={variant === "regular" ? "80%" : "100%"}
      w="100%"
      d="flex"
      justifyContent="center"
    >
      {children}
    </Box>
  );
};
