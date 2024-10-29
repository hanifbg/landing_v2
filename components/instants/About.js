import React from "react";
import Image from "next/image";

import { Box, Typography } from "@mui/material";

import about_1 from "../../assets/icon/about_1.webp";

const About = () => {
  return (
    <Box>
      <Box sx={{ position: "relative", display: "flex", flexDirection: "column", gap: "16px" }}>
        <Image src={about_1} alt="About" width={393} height={309} />
        <Typography
          variant="customLarge"
          component="h2"
          color="primary"
          mb={0}
          textAlign="left"
          sx={{
            fontWeight: "800",
            textTransform: "uppercase",
            background: "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0.24%, #FFF 58.82%)",
            position: "relative",
            top: "-100px",
            padding: "100px 24px 0",
            marginBottom: "-100px",
          }}
        >
          LAYAR BESAR & Jernih
        </Typography>
        <Typography variant="h2" color="secondary" textAlign="left" sx={{ margin: "0 24px" }}>
          Bercahaya seperti Bulan di tengah malam
        </Typography>
        <Typography variant="h4" color="text.primary" textAlign="left" sx={{ margin: "0 24px" }}>
          iQIBLA NOOR memancarkan kemewahan modernnya. Desainnya yang memikat menambahkan sentuhan keindahan abadi di tangan Anda, membisikkan rasa percaya diri di setiap pandangan.
        </Typography>
      </Box>
    </Box>
  );
};

export default About;
