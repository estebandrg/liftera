/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: process.env.DARK_MODE ? process.env.DARK_MODE : 'class',
  content: [
    './app/**/*.{html,js,jsx,ts,tsx,mdx}',
    './components/**/*.{html,js,jsx,ts,tsx,mdx}',
    '../../packages/ui/src/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('@acme/ui/tailwind-preset'), require('nativewind/preset')],
  important: 'html',
  theme: {
    extend: {
      fontFamily: {
        heading: undefined,
        body: undefined,
        mono: undefined,
      },
    },
  },
};
