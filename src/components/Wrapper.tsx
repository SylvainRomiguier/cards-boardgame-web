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
      p={4}
      mt={8}
      mx="auto"
      maxW={variant === "regular" ? "80%" : "40%"}
      w="100%"
      d="flex"
      justifyContent="center"
    >
      {children}
    </Box>
  );
};
