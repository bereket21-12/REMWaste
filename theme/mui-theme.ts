import { createTheme } from "@mui/material/styles";

export const muiTheme = createTheme({
  palette: {
    primary: {
      main: "#0037c1",
    },
    secondary: {
      main: "#FFC107",
    },
    background: {
      default: "#f5f7fa",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});
