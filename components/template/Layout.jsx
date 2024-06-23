import * as React from "react";
import "@fontsource/poppins";

import NewHeader from "../header/newHeader";
import Footer from "../footer";

import { Box, Container } from "@mui/material";

export default function Layout({ children }) {
  return (
    <Container maxWidth="lg" disableGutters={true}>
      <NewHeader />
      <Box
        sx={{
          padding: "16px 0",
        }}
      >
        <main>{children}</main>
      </Box>
      <Footer />
    </Container>
  );
}
