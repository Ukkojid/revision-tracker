module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        slideIn: 'slideIn 0.5s ease forwards',
      },
      colors: {
        teal: {
          600: '#319795',
          700: '#2C7A7B',
          800: '#285E61',
        },
        orange: {
          400: '#F6AD55',
          500: '#ED8936',
        },
      },
    },
  },
  plugins: [],
}