import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box, Button, Container, Typography } from "@mui/material";
import image1 from "../../../assets/home/hero_1.svg";
import Image from "next/image";
import LegacyHeader from "@components/legacy/noor/LegacyHeader";
import Video from "@components/legacy/noor/Video";
import Footer from "@components/legacy/Footer";
import Detail from "@components/legacy/noor/Detail";
import FormDataPenerima from "@components/legacy/noor/FormData";
const theme = createTheme({
  palette: {
    primary: {
      main: "#FDCC4D",
    },
    secondary: {
      main: "#9B9B9B", // Custom secondary color
    },
    text: {
      primary: "#585778",
      color: "#45494E",
      fontFamily: "Montserrat, sans-serif",
    },
  },
  typography: {
    fontFamily: "Montserrat, sans-serif",
    fontWeightRegular: 400,
    fontSize: 16,
    lineHeight: 1.5, // 150%
    customLarge: {
      fontFamily: "Montserrat, sans-serif",
      fontSize: "2.25rem", //36px
    },
    h1: {
      fontSize: "2rem", //32px
    },
    h2: {
      fontSize: "1.5rem", //24px
    },
    h3: {
      fontSize: "1.125rem", //18px
    },
    h4: {
      fontSize: "1rem", //16px
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiBox: {
      styleOverrides: {
        root: {
          textAlign: "center",
        },
      },
    },
  },
});

const IqiblaNoor = () => {
    const [jumlah, setJumlah] = useState(1);
    const [alamat, setAlamat] = useState("");
    const [hp, setHp] = useState("");
    const [nama, setNama] = useState("");

  return (
    <ThemeProvider theme={theme}>
      <Container
        disableGutters
        sx={{
          m: "0 auto",
          p: 0,

          maxWidth: {
            xs: "100%", // Full width untuk perangkat kecil (mobile)
            md: "500px", // 400px untuk perangkat desktop (md ke atas)
          },
          backgroundColor: "#fff", // Tambahkan properti ini
          boxShadow: "0 0 20px 0 rgb(0 0 0 / 10%)",
          borderRadius: "8px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            margin: "0",
          }}
        >
          <LegacyHeader />
          <Video />
          <Detail />
          <FormDataPenerima 
            jumlah={jumlah}
            setJumlah={setJumlah}
            alamat={alamat}
            setAlamat={setAlamat}
            hp={hp}
            setHp={setHp}
            nama={nama}
            setNama={setNama}
          />
          <Footer />
        </Box>
      </Container>
    </ThemeProvider>
  );
};

IqiblaNoor.getLayout = (page) => page;

export default IqiblaNoor;
