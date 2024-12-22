import React from "react";
import Image from "next/image";

import { Box, Stack, Typography } from "@mui/material";

import sectionTitle from "../../../public/lite/section3-title.webp";
import sectionBody from "../../../public/lite/section3-body.webp";
import sectionImage from "../../../public/lite/section3-image-1.webp";
import sectionImage2 from "../../../public/lite/section3-image-2.webp";

const Dzikir = () => {
  return (
    <Box
        sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
        }}
    >
      <Box
        sx={{
            marginTop: "20px",
            marginBottom: "10px",
            maxWidth: "200px",
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
            maxWidth: "200px",
        }}
      >
        <Image src={sectionImage} alt="sectionImage" />
      </Box>
      <Box
        sx={{
            marginTop: "20px",
            marginBottom: "10px",
        }}
      >
        <Image src={sectionImage2} alt="sectionImage" />
      </Box>
    </Box>
  );
};

export default Dzikir;
