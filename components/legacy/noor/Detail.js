import React from "react";
import { Box, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

const fiturProduk = [
    "Smart Counter",
    "Pengingat Tasbih",
    "Pengingat 5 Waktu Sholat",
    "Aplikasi iQibla Life",
    "Layar Terang",
    "Baterai Tahan Lama (3-7 hari)",
    "Pilihan Warna Beragam (Hitam, Pink, Biru, Hijau)",
    "Layar OLED 0.6 Inch",
    "Kompatibel dengan Android 5.1+ dan iOS 10.0+",
    "Bluetooth 5.1 untuk koneksi stabil",
  ];

const Detail = () => {
  return (
    <Box
      sx={{
        padding: "12px",
        textAlign: "left",
        maxWidth: "500px",
        margin: "0 auto",
      }}
    >
      <Typography variant="h4" sx={{ fontSize: "1rem", fontWeight: 700, marginBottom: "12px" }}>
        Detail Produk
      </Typography>
      {fiturProduk.map((fitur, index) => (
        <Box key={index} sx={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
          <CheckCircle sx={{ color: "#FDCC4D", marginRight: "8px" }} />
          <Typography variant="body1" sx={{ fontSize: "1rem", fontWeight: 400 }}>
            {fitur}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default Detail;