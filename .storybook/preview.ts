import type { Preview } from "@storybook/svelte";
import "tailwindcss/tailwind.css";
import "../src/app.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const globalTypes = {
  darkMode: true,
};

export default preview;
