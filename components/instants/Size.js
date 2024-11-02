import React from "react";
import Image from "next/image";

import { Box, Grid, Step, StepLabel, Stepper, Typography } from "@mui/material";
import background from "../../assets/icon/background_2.webp";
import noor22 from "../../assets/icon/noor_22_mm.png";
import noor20 from "../../assets/icon/noor_20_mm.png";
import noor18 from "../../assets/icon/noor_18_mm.png";

const Size = () => {
  return (
    <Box>
      <Typography
        variant="customLarge"
        component="h2"
        color="secondary"
        textAlign="center"
        sx={{
          fontWeight: "800",
          textTransform: "uppercase",
          padding: "0 24px",
        }}
      >
        TERSEDIA DALAM
      </Typography>
      <Typography
        variant="customLarge"
        component="h2"
        color="primary"
        textAlign="center"
        sx={{
          fontWeight: "800",
          textTransform: "uppercase",
          padding: "0 24px",
          marginBottom: "40px",
        }}
      >
        3 UKURAN
      </Typography>
      <Box></Box>
      <Box sx={{ position: "relative", height: "11.25rem" }}>
        <Image
          src={background}
          alt="vector"
          width={300}
          height={300}
          style={{
            position: "absolute",
            top: "0",
            right: "0",
            zIndex: "-1",
            width: "100%",
          }}
        />
      </Box>
      <Box
        sx={{
          width: "100%",

          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={6} md={6}>
            <Image src={noor22} alt="noor22" width={300} height={300} />
          </Grid>
          <Grid item xs={6} md={6} />
          <Grid item xs={6} md={6} />
          <Grid item xs={6} md={6}>
            <Image src={noor20} alt="noor18" width={300} height={300} />
          </Grid>
          <Grid item xs={6} md={6}>
            <Image src={noor18} alt="noor18" width={300} height={300} />
          </Grid>
          <Grid item xs={6} md={6} />
        </Grid>
      </Box>
    </Box>
  );
};

export default Size;
