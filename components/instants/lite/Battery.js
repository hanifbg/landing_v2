import React from "react";
import Image from "next/image";

import { Box, Stack, Typography } from "@mui/material";

import sectionTitle from "../../../public/lite/section5-title.webp";
import sectionBody from "../../../public/lite/section5-body.webp";
import sectionImage from "../../../public/lite/section5-image.webp";

const Battery = () => {
  return (
    <Box
        sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
        }}
    >
      <Box
        sx={{
            marginTop: "20px",
            marginBottom: "10px",
            maxWidth: "288px",
        }}
      >
        <Image src={sectionTitle} alt="sectionTitle" width={338} height={61} />
      </Box>
      <Box>
        <Image src={sectionBody} alt="sectionBody" width={338} height={61} />
      </Box>
      <Box
        sx={{
            marginTop: "20px",
            marginBottom: "10px",
            maxWidth: "338px",
        }}
      >
        <Image src={sectionImage} alt="sectionImage" />
      </Box>
    </Box>
  );
};

export default Battery;
