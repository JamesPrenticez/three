module.exports = {
  mode: 'jit',
  content: [
    './client/.{js,ts,jsx,tsx}',
    './client/components/**/*.{js,ts,jsx,tsx}'
  ],
  media: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      xs: ['.75rem', '1rem'], //font size, line height
      sm: ['.875rem', '2rem'],
      base: ['1rem', '2.5rem'],
      normal: ['1rem', '1.5rem'],
      lg: ['1.125rem', '1.75rem'],
      xl: ['1.25rem', '2.5rem'],
      "2xl": ['2rem', '5.5rem'],
      "3xl": ['3rem', '6.5rem'],
      "4xl": ['4rem', '7.5rem'],
      "5xl": ['5rem', '7.5rem'],
      "6xl": ['6rem', '8.5rem'],
      "7xl": ['7rem', '9.5rem'],
    },
  },
  variants: {},
  plugins: [],
}