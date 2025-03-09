import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Footer = () => {
    return (
        <Box
            sx={{
                textAlign: "center",
            }}
        >
            <Typography
                variant="body2"
                color="text.primary"
                sx={{
                    color: "var(--iqibla-com-shuttle-gray, #5F6368)",
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "11px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "normal",
                }}
            >
                © iQIBLA Indonesia 2025
            </Typography>
        </Box>
    );
};

export default Footer;