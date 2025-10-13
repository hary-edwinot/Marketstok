//Import the colors from your color utility file
import { goldenYellow } from './src/utils/color';


// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Define custom colors here if needed
        goldenYellow: goldenYellow,
      },
    },
  },
  plugins: [],
}