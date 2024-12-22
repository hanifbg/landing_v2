import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import ringGreen from "../../../assets/images/ringgreen.png";
import ringBlue from "../../../assets/images/ringblue.png";
import ringPink from "../../../assets/images/ringpink.png";
import ringRed from "../../../assets/images/ringred.png";
import logo from "../../../assets/icon/logo-instant.webp";
import Image from "next/image";
const Landing = () => {
return (
    <Box
        sx={{
            textAlign: "center",
            padding: 3,
            borderRadius: 2,
            border: "1px solid #ddd",
            backgroundColor: "#f9f9f9",
            margin: "auto",
            height: "auto",
            background: "linear-gradient(180deg, rgba(76, 76, 76, 0.5) 0%, rgba(255, 255, 255, 0.5) 50%)",
            mixBlendMode: "multiply",
        }}
    >
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

        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                padding: "0 24px 32px",
                filter: "blur(2px)",
            }}
        >
            <Image src={ringRed} alt="Logo Instant" width={110} height={30} />
        </Box>
        <Box>
            <Typography
                sx={{
                    color: "var(--iqibla-com-abbey, #45494E)",
                    fontFamily: "Inter",
                    fontSize: "56px",
                    fontStyle: "normal",
                    fontWeight: 700,
                    lineHeight: "normal",
                }}
            >
                Zikr1 Lite
            </Typography>
        </Box>
    </Box>
);
};

export default Landing;
