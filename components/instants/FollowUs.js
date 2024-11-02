import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import logoIG from "../../assets/icon/instagram.png";
import logoTokopedia from "../../assets/icon/tokopedia.png";
import logoShopee from "../../assets/icon/shopee.png";
import logoTiktok from "../../assets/icon/tiktok.png";

const FollowUs = () => {
  const commonTextStyle = {
    color: "#A0A0A0",
    fontFamily: "Montserrat, sans-serif",
    fontStyle: "normal",
    marginBottom: "12px",
    fontSize: "16px",
  };

  const social_medias = [
    {
      label: "Instagram",
      value: "@iqibla.indonesia",
      logo: logoIG,
      link: "https://www.instagram.com/iqibla.indonesia?igsh=MWx5b3c1eWI5Yml0Zg==",
    },
    {
      label: "Tokopedia",
      value: "iQibla Indonesia",
      logo: logoTokopedia,
      link: "https://tokopedia.link/hVgMDyX2bOb",
    },
    {
      label: "Shopee",
      value: "iQibla Indonesia Official Store",
      logo: logoShopee,
      link: "https://id.shp.ee/WLWjXQy",
    },
    {
      label: "TikTok",
      value: "@iqibla.indonesia",
      logo: logoTiktok,
      link: "https://vt.tiktok.com/ZSj6b9H1T/?page=Mall",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        padding: "24px 0",
        background: "linear-gradient(180deg, #FFF 46.72%, rgba(255, 255, 255, 0.00) 99.71%)",
      }}
    >
      <Box
        textAlign="left"
        sx={{
          maxWidth: "600px",
          width: "100%",
          padding: "0 24px",
        }}
      >
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
            <Typography
              sx={commonTextStyle}
              component="a"
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.value}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default FollowUs;
    