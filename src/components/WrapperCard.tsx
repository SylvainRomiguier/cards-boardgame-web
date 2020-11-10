import { Box } from "@chakra-ui/core";
import React from "react";

export interface WrapperCardProps {
  background?: string;
  variant?: string;
}

export const WrapperCard: React.FC<WrapperCardProps> = ({
  children,
  background,
  variant = "regular"
}) => {
  return (
    <Box w="340px" h="474px">
      <div
        style={{
          backgroundImage: `url(${background})`,
          width: "100%",
          height: "100%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          padding: "40px",
          paddingTop: variant === "regular" ? "50px" : "40px"

        }}
      >
        {children}
      </div>
    </Box>
  );
};
