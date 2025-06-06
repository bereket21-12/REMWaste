"use client";
import { ReactNode } from "react";
import "./globals.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { muiTheme } from "@/theme/mui-theme";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={muiTheme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
