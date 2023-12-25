const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      violet: colors.violet,
      purple: colors.purple,
      red: colors.red,
      green: colors.green,
      blue: colors.blue,
      orange: colors.orange,
      pink: colors.pink,
      teal: colors.teal,
      cyan: colors.cyan,
      lime: colors.lime,
      amber: colors.amber,
      rose: colors.rose,
      fuchsia: colors.fuchsia,
      zinc: colors.zinc,
      primary: {
        50: '#f2f9fd',
        100: '#e5f0f9',
        200: '#c4e1f3',
        300: '#90c9e9',
        400: '#55addb',
        500: '#2f93c8',
        600: '#2076a9',
        700: '#1b5e89',
        800: '#194d6e',
        900: '#1b435f',
        950: '#122b3f',
      },
    },
    extend: {
      transitionProperty: {
        width: 'width',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
