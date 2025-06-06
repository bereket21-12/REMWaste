"use client";

import { AppBar, Toolbar, Typography, Container } from "@mui/material";

export default function Header() {
  return (
    <AppBar position="static" color="primary">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography variant="h6" component="div">
            {/* WeWantWaste */}
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
