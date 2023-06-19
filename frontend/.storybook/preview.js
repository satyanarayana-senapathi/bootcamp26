import { ThemeProvider } from "emotion-theming";
import { MemoryRouter } from "react-router-dom";
import theme from "../src/themes/";
import "./storybook.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <MemoryRouter>
      <ThemeProvider theme={theme}>{Story()}</ThemeProvider>
    </MemoryRouter>
  ),
];
