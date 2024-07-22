import type { Config } from "tailwindcss";
import {content, plugin} from "flowbite-react/tailwind"
export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}",
    content()
  ],
  darkMode: "media",
  theme: {
    extend: {},
    container: {
      center: true,
    },
    fontFamily: {
      'sans': ['Helvetica', 'Arial', 'sans-serif'],
      'roboto': ['Roboto', 'sans-serif'],
    }
  },
  plugins: [
    plugin(),
  ],
} satisfies Config;
