import React from "react";
import { ThemeProvider } from "@mui/material";
import theme from "./themes";

import Templates from "./templates/Templates";
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>{Templates.map((template) => template.component)}</>
    </ThemeProvider>
  );
};

export default App;
