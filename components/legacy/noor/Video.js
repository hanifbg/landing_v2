import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Video = () => {
    return (
        <Box
            sx={{
                width: "100%",
                height: "auto",
                borderRadius: "8px",
                overflow: "hidden",
                position: "relative",
                padding: "12px",
            }}
        >
            <Box
                sx={{
                    position: "relative",
                    width: "100%",
                    height: "auto",
                }}
            >
                <video
                    src="https://cvf.shopee.co.id/file/api/v4/11110105/mms/id-11110105-6ke1d-m1hwv00k2da190.16000081729221872.mp4"
                    style={{
                        width: "100%",
                        height: "auto",
                    }}
                    autoPlay
                    loop
                    muted
                />
            </Box>
            
        </Box>
    );
};

export default Video;