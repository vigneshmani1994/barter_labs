import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#fafafa',
        surface: '#ffffff',
        primary: {
          DEFAULT: '#5abcb9', // The Preply teal color
          light: '#76c9c6',
          dark: '#459d9a',
        },
        navy: '#1f2937', // For the dark blob shape
      },
    },
  },
  plugins: [],
}
export default config