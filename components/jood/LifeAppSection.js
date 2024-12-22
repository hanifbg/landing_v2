import React from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import title1 from "../../public/jood/jood_title_app.webp";
import app1 from "../../public/jood/life_app1.webp";
import app2 from "../../public/jood/life_app2.webp";

const LifeAppSection = () => {
  return (
    <Box sx={{ marginTop: "-40px" }}>
      <Box sx={{ padding: "0 20px 40px" }}>
        <Image src={title1} alt="jood" width={338} height={61} />
        <Typography
          color="text.primary"
          sx={{
            fontSize: "28px",
            fontWeight: "400",
            color: "#212121",
          }}
        >
          Bertasbih kapan saja, di mana saja. iQibla akan mencatatnya secara otomatis untuk Anda
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundImage: "url('/jood/life_app1.webp')",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
          height: "540px",
        }}
      >
        <Box
          sx={{
            background: "linear-gradient(180deg, #fffafa 7.11%, rgba(255, 255, 255, 0.00) 83.33%)",
            height: "200px",
          }}
        ></Box>
        <Box>
          <Image src={app2} alt="jood" width={373} height={571} />
        </Box>
      </Box>
    </Box>
  );
};

export default LifeAppSection;
