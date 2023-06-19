import { styled } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

const StyledApp = styled(App)(
  () => `
  body:{
    margin: 0;
  }
  `
);

ReactDOM.render(
  <BrowserRouter>
    <StyledApp />
  </BrowserRouter>,
  document.getElementById("app-root")
);
