import { Box } from "@chakra-ui/core";
import React from "react";

export interface WrapperCardProps {
  background?: string;
}

export const WrapperCard: React.FC<WrapperCardProps> = ({
  children,
  background,
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
          paddingTop: "60px"
        }}
      >
        {children}
      </div>
    </Box>
  );
};
