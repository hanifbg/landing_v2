import React from "react";

import Image from "next/image";

import { Box, Typography, Button, Container } from "@mui/material";

import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import logo from "../../../assets/icon/logo-instant.webp";
import zikrRing from "../../../assets/icon/zikr.webp";
import noor from "../../../assets/icon/noor.webp";
import practice from "../../../assets/icon/practice.webp";
import iqibla_1 from "../../../assets/icon/zikr_leaf.webp";

import image1 from "../../../assets/home/hero_1.svg";

const Home = ({ onLearnMoreClick }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%", minHeight: "100vh" }}>
      <Box sx={{ position: "relative" }}>
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

        <Image
          src={image1}
          alt="Model zikr ring"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: { xs: "30%", md: "63%" },
            left: { xs: "0", md: "50%" },
            transform: { xs: "none", md: "translate(-50%, -50%)" },
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: "16px", padding: "0 24px 32px" }}>
            <Image src={zikrRing} alt="ZikrRIng" width={100} height={50} />
            <Image src={noor} alt="noor" width={343} height={80} />
          </Box>
          <Box
            sx={{
              background: "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 60%)",
              padding: "0 24px 32px",
            }}
          >
            <Typography variant="h2" color="text.primary" mb={0} textAlign="left" gutterBottom>
              Solusi
            </Typography>
            <Image src={practice} alt="noor" width={345} height={92} />
            <Typography variant="h2" color="text.primary" mb={0} textAlign="right" gutterBottom>
              Untuk Zikir yang Khusyuk
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box sx={{ padding: "80px 0 24px", margin: "0 24px" }}>
        <Typography variant="h2" color="text.primary" mb={0} textAlign="left" gutterBottom>
          Berzikir Tanpa Repot Dengan iQibla Zikr Ring yang Ringan
        </Typography>

        <Box sx={{ position: "relative", display: "flex", alignItems: "center", justifyContent: { xs: "right", sm: "center" } }}>
          <Image
            src={iqibla_1}
            alt="ZikrRIng"
            width={250}
            height={250}
            style={{
              transform: "rotate(34.185deg)",
            }}
          />
          <Box>
            <Typography
              variant="h2"
              color="text.primary"
              textAlign="right"
              mb={0}
              gutterBottom
              sx={{
                fontSize: "0.875rem",
              }}
            >
              Memiliki berat
            </Typography>
            <Typography
              variant="h2"
              color="primary"
              mb={0}
              textAlign="right"
              m="0"
              gutterBottom
              sx={{
                fontSize: "3.25rem",
              }}
            >
              7.2g
            </Typography>
          </Box>
        </Box>

        <Typography variant="h2" color="text.primary" mb={0} textAlign="right" gutterBottom>
          memudahkan Anda fokus pada ibadah tanpa gangguan
        </Typography>
      </Box>

      <Button
        variant="contained"
        color="primary"
        endIcon={<ArrowDownwardIcon />}
        onClick={onLearnMoreClick}
        sx={{
          width: "max-content",
          margin: "0 auto",
          textTransform: "none",
        }}
      >
        Pelajari Lebih Lanjut
      </Button>
    </Box>
  );
};

export default Home;
