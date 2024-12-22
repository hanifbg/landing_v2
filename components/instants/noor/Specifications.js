import React from "react";
import { Box, Grid, Typography } from "@mui/material";

const Specifications = () => {
    const commonTextStyle = {
        color: "#A0A0A0",
        fontFamily: "Montserrat, sans-serif",
        fontStyle: "normal",
        marginBottom: "12px",
        fontSize: "16px",
    };

    const packingList = [
        "Zikr Ring Noor*1",
        "USB Cable*1",
        "User Manual*1",
        "Warranty Card*1",
    ];

    const specifications = [
        { label: "Bluetooth", value: "Bluetooth 5.1" },
        { label: "Battery capacity", value: "45mAh" },
        { label: "Charging port", value: "DC charging" },
        { label: "Size", value: "22mm, 20mm, 18mm" },
        { label: "Matching systems", value: "Android 5.1 or iOS 10.0 or later" },
        { label: "Material", value: "Plastic" },
        { label: "Theoretical working hours", value: "up to 3 days in typical usage / up to 5 days in basic usage" },
        { label: "Weight", value: "7.2g" },
        { label: "Screen", value: "Segment, 0.6 inch" },
        { label: "Button", value: "1 button" },
        { label: "Sensors", value: "Vibration Motor" },
    ];

    return (
        <Box
            textAlign="left"
            sx={{
                padding: "24px",
                background: "linear-gradient(180deg, #FFF 46.72%, rgba(255, 255, 255, 0.00) 99.71%)",
            }}
        >
            {/* Packing List */}
            <Typography variant="h6" sx={{ fontWeight: "bold", fontFamily: "Montserrat, sans-serif", fontSize: "24px", marginBottom: "18px" }}>
                Packing list
            </Typography>
            {packingList.map((item, index) => (
                <Typography key={index} sx={commonTextStyle}>
                    {item}
                </Typography>
            ))}

            {/* Specifications */}
            <Typography variant="h6" sx={{ fontWeight: "bold", fontFamily: "Montserrat, sans-serif", fontSize: "24px", marginBottom: "18px", marginTop: "24px" }}>
                Specification
            </Typography>
            {specifications.map((spec, index) => (
                <Typography key={index} sx={commonTextStyle}>
                    <strong>{spec.label}:</strong> {spec.value}
                </Typography>
            ))}
        </Box>
    );
};

export default Specifications;
