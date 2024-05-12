/** @type {import('tailwindcss').Config} */

import typoGraphy from "@tailwindcss/typography";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        handlee: ["Handlee", "cursive"],
      },
    },
  },
  plugins: [typoGraphy],
};
