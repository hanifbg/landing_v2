import React from "react";

import { Box, Divider, Typography } from "@mui/material";

const ServiceSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: { xs: "column", md: "row" },
        borderRadius: "16px",
        boxShadow: "0px -1.94px 19px 0px rgba(16, 14, 62, 0.10)",
        padding: "16px",
        marginTop: { xs: "32px", md: "0" },
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: "8px", flexDirection: { xs: "column", md: "row" } }}>
        <img src={"/assets/images/homepage/shipping.png"} />
        <Box sx={{ textAlign: "center" }}>
          <Typography
            component={"h3"}
            sx={{
              fontWeight: "600",
              fontSize: "22px",
              lineHeight: "33px",
            }}
          >
            Gratis Ongkir
          </Typography>
          <Typography>Jabodetabek</Typography>
        </Box>
      </Box>
      <Box sx={{ height: "60px", border: "1px solid #0000001f" }}></Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: "8px", flexDirection: { xs: "column", md: "row" } }}>
        <img src={"/assets/images/homepage/layanan.png"} />
        <Box sx={{ textAlign: "center" }}>
          <Typography
            component={"h3"}
            sx={{
              fontWeight: "600",
              fontSize: "22px",
              lineHeight: "33px",
            }}
          >
            Layanan 24/7
          </Typography>
          <Typography>Setiap hari melayani</Typography>
        </Box>
      </Box>
      <Box sx={{ height: "60px", border: "1px solid #0000001f" }}></Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: "8px", flexDirection: { xs: "column", md: "row" } }}>
        <img src={"/assets/images/homepage/official.png"} />
        <Box sx={{ textAlign: "center" }}>
          <Typography
            component={"h3"}
            sx={{
              fontWeight: "600",
              fontSize: "22px",
              lineHeight: "33px",
            }}
          >
            Official Store
          </Typography>
          <Typography>Temukan di e-commerce</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ServiceSection;
