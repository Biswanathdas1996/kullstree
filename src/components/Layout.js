import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import NavigationBar from "./shared/NavigationBar";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function Layout({ body }) {
  return (
    <Box style={{ backgroundColor: "#f3f3f4" }}>
      <CssBaseline />
      <NavigationBar />

      <div>
        <DrawerHeader />
        {body()}
      </div>
    </Box>
  );
}
