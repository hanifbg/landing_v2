import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import logoIG from "../../assets/icon/instagram.png";
import logoTokopedia from "../../assets/icon/tokopedia.png";
import logoShopee from "../../assets/icon/shopee.png";

const FollowUs = () => {
  const commonTextStyle = {
    color: "#A0A0A0",
    fontFamily: "Montserrat, sans-serif",
    fontStyle: "normal",
    marginBottom: "12px",
    fontSize: "16px",
  };

  const social_medias = [
    { label: "Instagram", value: "@iqibla.indonesia", logo: logoIG },
    { label: "Tokopedia", value: "iQibla Indonesia", logo: logoTokopedia },
    {
      label: "Shopee",
      value: "iQibla Indonesia Official Store",
      logo: logoShopee,
    },
  ];

  return (
    <Box
      textAlign="left"
      sx={{
        padding: "0 24px",
        background:
          "linear-gradient(180deg, #FFF 46.72%, rgba(255, 255, 255, 0.00) 99.71%)",
      }}
    >
      {/* Packing List */}
      <Typography
        variant="h6"
        sx={{
          fontWeight: "bold",
          fontFamily: "Montserrat, sans-serif",
          fontSize: "14px",
          marginBottom: "18px",
        }}
      >
        Kunjungi Kami
      </Typography>
      {social_medias.map((item, index) => (
        <Box
          key={index}
          sx={{ display: "flex", alignItems: "center", marginBottom: "12px" }}
        >
          <Box sx={{ marginRight: "8px" }}>
            <Image src={item.logo} alt={item.label} width={24} height={24} />
          </Box>
          <Typography sx={commonTextStyle}>{item.value}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default FollowUs;
