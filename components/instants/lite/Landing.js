import React from "react";
import { Box, Typography } from "@mui/material";
import logo from "../../../assets/icon/logo-instant.webp";
import topHeader from "../../../assets/images/topheader.png";
import ringGreen from "../../../assets/images/ringgreen.png";
import ringRed from "../../../assets/images/ringred.png";
import ringBlue from "../../../assets/images/ringblue.png";
import Image from "next/image";
import ringPurplePink from "../../../assets/images/ringpurplepink.png";
import bg from "../../../public/jood/vector.webp";
import promo from "../../../assets/images/promo-lite.svg";

const Landing = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        padding: "24px 0 0",
        backgroundColor: "#f9f9f9",
        margin: "auto",
        height: "auto",
        position: "relative", // Tambahkan position relative pada parent
        background: "linear-gradient(180deg, #AEAEAE 0%, #FFF 50%)",
      }}
    >
      {/* Logo Section */}
      <Box
        sx={{
          position: "absolute",
          top: "30px",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Image src={logo} alt="Logo Instant" width={110} height={30} />
      </Box>

      <Box sx={{ backgroundImage: "url('/jood/vector.webp')" }}>
        {/* Background Image */}
        <Box
          sx={{
            position: "absolute",
            top: "30px",
            left: "0%",
            width: "60px",
            filter: "blur(2px)",
          }}
        >
          <Image src={ringRed} alt="Top Header Background" layout="responsive" />
        </Box>

        {/* Content Section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "48px 24px",
            marginTop: "48px",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "148px",
              right: "0%",
              width: "60px",
              filter: "blur(2px)",
            }}
          >
            <Image src={ringBlue} alt="Top Header Background" layout="responsive" />
          </Box>
          <Typography
            sx={{
              color: "#45494E",
              fontSize: "56px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "normal",
              textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
          >
            Zikr1 Lite
          </Typography>
        </Box>

        {/* Description Section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "16px",
            marginTop: "16px",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              width: "90px",
              top: "190px",
              left: "0%",
            }}
          >
            <Image src={ringGreen} alt="Top Header Background" layout="responsive" />
          </Box>
          <Box
            sx={{
              width: "254px",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Typography
              sx={{
                color: "#212121",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "26px",
              }}
            >
              Permudah ibadah Anda dengan teknologi modern dan desain minimalis yang nyaman dipakai sepanjang hari.
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            marginTop: "16px",
            marginBottom: "16px",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <Box>
            <Image src={ringPurplePink} alt="Top Header Background" maxHeight="200px" />
          </Box>
        </Box>
      </Box>

      <Box onClick={() => window.open("https://api.whatsapp.com/send?phone=6285179766847&text=Halo,%20saya%20ingin%20tahu%20lebih%20lanjut%20tentang%20Zikr%20Ring%20Lite.", "_blank")}>
        <Image src={promo} alt="promo" width={360} height={193} style={{ cursor: "pointer" }} />
      </Box>
    </Box>
  );
};

export default Landing;
