import React from "react";
import Image from "next/image";

import { Box, Typography } from "@mui/material";

import image1 from "../../public/jood/hero_title_8.webp";
import size1 from "../../public/jood/jood_18mm.webp";
import size2 from "../../public/jood/jood_20mm.webp";
import size3 from "../../public/jood/jood_22mm.webp";

const ModelSection = () => {
  return (
    <Box sx={{ textAlign: "center", padding: "40px 0 0" }}>
      <Typography
        color="text.primary"
        sx={{
          fontSize: "28px",
          fontWeight: "600",
          color: "black",
          textTransform: "uppercase",
          marginBottom: "8px",
        }}
      >
        tersedia dalam
      </Typography>
      <Image src={image1} alt="jood" width={200} height={44} />
      <Box sx={{ position: "relative" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            gap: "40px",
            paddingTop: "40px",
            backgroundImage: "url('/jood/vector_size.webp')",
            backgroundSize: "cover",
            backgroundPosition: "right",
            backgroundRepeat: "no-repeat",
            position: "relative",
            zIndex: "1",
          }}
        >
          <Image src={size1} alt="jood" width={356} height={405} />
          <Image src={size2} alt="jood" width={356} height={405} />
          <Image src={size3} alt="jood" width={356} height={405} />
        </Box>
        <Box
          sx={{
            position: "relative",
            zIndex: "0",
            top: "-118px",
          }}
        >
          <Box
            sx={{
              backgroundImage: "url('/jood/hero_7.webp')",
              backgroundSize: "cover",
              backgroundPosition: "bottom",
              backgroundRepeat: "no-repeat",
              height: "300px",
            }}
          >
            <Box
              sx={{
                background: "linear-gradient(180deg, #FFF 7.11%, rgba(255, 255, 255, 0.00) 83.33%)",
                height: "100px",
              }}
            ></Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ModelSection;
