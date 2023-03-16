const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-generalSans)', ...fontFamily.sans],
        DMsans: ['DM Sans', ...fontFamily.sans],
      },
      fontSize: {
        sm: '12px',
        base: '14px',
        lg: '20px',
        xl: '24px',
        '2xl': '40px',
      },
      colors: {
        'main-purple': '#1D1D41',
        'second-purple': '#AEABD8',
        'light-purple': '#27264E',
        'blue': '#64CFF6',
        'metal': '#231F20',
        'bg-green': '#02B15A26',
        'bg-red': '#EB001B26',
        'bg-purple': '#AEABD887',
      },
    },
  },
  plugins: [],
}
