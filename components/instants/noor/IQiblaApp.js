import React from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import background from "../../../assets/icon/iqibla_live_app_background.webp";
import header from "../../../assets/icon/iqibla_live_app.png";
import body from "../../../assets/icon/iqiblaApps.png";
import Specifications from "./Specifications";

const IQiblaApp = () => {
  return (
    <Box sx={{ maxWidth: "600px", margin: "0 auto" }}> {/* Constrain the overall container width */}
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Image src={header} alt="header" width={300} height={300} />
      </Box>

      <Box
        sx={{
          position: "relative",
          height: "11.25rem",
          background:
            "linear-gradient(180deg, #FFF 46.72%, rgba(255, 255, 255, 0.00) 99.71%)",
        }}
      >
        <Image
          src={background}
          alt="vector"
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            zIndex: "-1",
            width: "100%",
            maxWidth: {
              xs: "100%",    // Full width on extra-small screens
              sm: "100%",    // Full width on small screens
              md: "80%",     // 80% width on medium screens
              lg: "60%",     // 60% width on large screens
              xl: "50%",     // 50% width on extra-large screens
            },
          }}
        />
        <Box
          sx={{
            width: "100%",
            color: "#9B9B9B",
            textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            fontFamily: "Montserrat",
            fontSize: "28px",
            lineHeight: "38px",
            alignItems: "center",
            backgroundColor: "white",
            padding: "24px",
            textAlign: "left",
            position: "relative",
            zIndex: 1,
            background:
              "linear-gradient(180deg, #FFF 46.72%, rgba(255, 255, 255, 0.00) 99.71%)",
          }}
        >
          Bertasbih kapan saja, di mana saja. iQibla akan mencatatnya secara
          otomatis untuk Anda
        </Box>
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "16px",
        }}
      >
        <Image src={body} alt="body" width={300} height={300} />
      </Box>
      <Specifications />
    </Box>
  );
};

export default IQiblaApp;
