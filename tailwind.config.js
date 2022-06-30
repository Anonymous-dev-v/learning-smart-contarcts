const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['**/*.{ts,css,scss,html,tsx,jsx}', './pages/*.tsx', './pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    typography: (theme) => ({}),
    extend: {
    },
  },
  variants: {
    extend: {},
  },
  plugins: [ plugin(function({ matchUtilities, theme }) {
      matchUtilities(
        {'icon': (value) => ({
            width: `${value}`,
            height: `${value}`,
            maxWidth: `${value}`,
            maxHeight: `${value}`,
            minWidth: `${value}`,
            minHeight: `${value}`,
            borderRadius: '50%',
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundPosition: '50%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            objectFit: 'cover'
          })},

    {values: theme('iconSize')})
    })]
}
