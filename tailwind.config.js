/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'github-red': '#ea6045',
        'github-blue': '#797ef9',
        'github-green': '#2ea043',
        'github-purple': '#6e40c9',
        "primary": "#050816",
        "html": "#E44D26",
        "css": "#0277BD",
        "javascript": "#F0DB4F",
        "redux": "#764ABC",
        "react": "#00D8FF",
      },
      screens: {
        'xs': '480px',
      },
      animation: {
        wave: 'wave 2s infinite linear',
        text: 'text 5s infinite ease',
      },
      keyframes: {
        wave: {
          "0%": {
            transform: "translateX(0px)"
          },
          "100%": {
            transform: "translateX(-100px)"
          },
        },
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        }
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        "custom": "linear-gradient(-90.13deg,#00cea8 1.9%,#bf61ff 97.5%)",
        "instagram":"linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
        "google":"linear-gradient(-120deg, #4285f4, #34a853, #fbbc05, #ea4335)"
      }
    },
  },
  plugins: [],
}
