import React from 'react';
import { Box, Typography } from '@mui/material';

const LegacyHeader = () => {
    return (
        <>
            <Box
                sx={{
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    padding: "8px",
                    justifyContent: "center",
                    flexDirection: "column",
                    width: "100%",
                    backgroundColor: "#FDCC4D",
                }}
            >
                <Typography
                    variant="h1"
                    color="text.primary"
                    sx={{
                        fontSize: "2rem",
                        fontWeight: 700,
                        justifyContent: "center",
                    }}
                >
                    Cincin Tasbih Pintar
                </Typography>
                <Typography
                    variant="h2"
                    color="text.primary"
                    sx={{
                        fontSize: "1.125rem",
                        fontWeight: 400,
                        justifyContent: "center",
                    }}
                >
                    IQIBLA NOOR
                </Typography>
            </Box>
            <Box
                sx={{
                    width: "100%",
                    height: "auto",
                    overflow: "hidden",
                    position: "relative",
                    padding: "12px",
                    color: "#fff",
                    justifyContent: "center",
                    textAlign: "center",
                }}
            >
                <Typography
                    variant="h5"
                    color="text.primary"
                    sx={{
                        fontSize: "1rem",
                        fontWeight: 400,
                        justifyContent: "center",
                    }}
                >
                    Berzikir Tanpa Repot Dengan iQibla Zikr Ring yang Ringan
                </Typography>
            </Box>
        </>
    );
};

export default LegacyHeader;