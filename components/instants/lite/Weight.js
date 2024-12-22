import React from "react";
import Image from "next/image";

import { Box, Stack, Typography } from "@mui/material";

import sectionTitle from "../../../public/lite/section4-title.webp";
import sectionBody from "../../../public/lite/section4-body.webp";
import sectionImage2 from "../../../public/lite/weight.webp";
import sectionImage1 from "../../../public/lite/weight_ring.webp";
import sectionImage3 from "../../../public/lite/gram.webp";
import sectionImage4 from "../../../public/lite/section4-image-5.webp";

const Weight = () => {
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
          maxWidth: "270px",
        }}
      >
        <Image src={sectionTitle} alt="sectionTitle" width={338} height={61} />
      </Box>
      <Box>
        <Image src={sectionBody} alt="sectionBody" width={338} height={61} />
      </Box>
      <Box
        sx={{
          marginTop: "30px",
          maxWidth: "400px",
          display: "flex",
        }}
      >
        <Box
          sx={{
            width: "102px",
            height: "26px",
            marginRight: "20px",
          }}
        >
          <Image src={sectionImage1} alt="sectionImage" />
        </Box>
        <Box
          sx={{
            width: "162px",
            height: "146px",
            alignItems: "start",
            display: "flex",
          }}
        >
          <Image src={sectionImage2} alt="sectionImage" />
        </Box>
        <Box
          sx={{
            width: "44px",
            alignItems: "center",
            display: "flex",
          }}
        >
          <Image src={sectionImage3} alt="sectionImage" />
        </Box>
      </Box>
      <Box
        sx={{
          marginBottom: "10px",
          maxWidth: "400px",
        }}
      >
        <Box>
          <Image src={sectionImage4} alt="sectionImage" />
        </Box>
      </Box>
      {/* <Box
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
      </Box> */}
    </Box>
  );
};

export default Weight;
