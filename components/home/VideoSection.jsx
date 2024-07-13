import { Box } from "@mui/material";
import React from "react";

const VideoSection = () => {
  return (
    <Box
      className="video-section"
      sx={{
        display: "flex",
        justifyContent: "center",
        paddingBottom: "80px",
      }}
    >
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/W6vSmtxFwsg"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </Box>
  );
};

export default VideoSection;
