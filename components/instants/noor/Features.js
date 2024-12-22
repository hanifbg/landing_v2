import React from "react";
import Image from "next/image";

import { Box, Step, StepLabel, Stepper, Typography } from "@mui/material";

import noor from "../../../assets/icon/noor.webp";
import watch from "../../../assets/icon/watch.webp";
import ellipse from "../../../assets/icon/ellipse.webp";

const Features = () => {
  const steps = ["Pengingat Jadwal Shalat", "Penghitung Tasbih Pintar", "Personalisai Tasbih", "Pengingat Tasbih", "Konektivitas Bluetooth", "Ketahanan Baterai Hingga 7 Hari"];

  return (
    <Box>
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
        Fitur unggulan
      </Typography>
      <Box sx={{ position: "relative", height: "11.25rem" }}>
        <Image
          src={noor}
          alt="noor"
          width={343}
          height={80}
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
          }}
        />
        <Image
          src={watch}
          alt="noor"
          width={448}
          height={280}
          style={{
            position: "absolute",
            left: "50%",
            transform: "translate(-50%, -50%)",
            top: "3.75rem",
            zIndex: "1",
          }}
        />
        <Image
          src={ellipse}
          alt="noor"
          width={185}
          height={185}
          style={{
            position: "absolute",
            left: "50%",
            transform: "translate(-50%, -50%)",
            top: "6.125rem",
            zIndex: "0",
          }}
        />
        <Box
          sx={{
            display: "block",
            borderColor: "#DDC29E",
            borderLeftStyle: "solid",
            borderLeftWidth: "2px",
            minHeight: "24px",
            position: "absolute",
            top: "9.375rem",
            left: "50%",
            borderRadius: "4px",
            marginLeft: "-1px",
          }}
        ></Box>
      </Box>
      <Box sx={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Stepper
          orientation="vertical"
          sx={{
            "&.MuiStepper-root": {
              alignItems: "center",
              "&  .MuiStepConnector-root": {
                margin: "0",
                "&  .MuiStepConnector-line": {
                  borderLeftWidth: "2px",
                  borderRadius: "4px",
                  borderColor: "#DDC29E",
                },
              },
            },
          }}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel
                sx={{
                  "& .MuiStepLabel-iconContainer": {
                    display: "none",
                  },
                }}
              >
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    </Box>
  );
};

export default Features;
