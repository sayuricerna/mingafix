/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'azul-mas-oscuro': '#057A9D',
        'azul-oscuro': '#047EA7',
        'azul': '#0787B6',
        'azul-claro': '#23BAE9',
        'verde-oscuro': '#22905F',
        'verde': '#2AB483',
        'verde-claro': '#0BBBB0',
      },
      fontFamily: {
        'sans': ['Helvetica', 'Arial', 'sans-serif'],
        'serif': ['Georgia', 'serif'],
        'mono': ['Courier New', 'monospace'],
      },
      fontSize: {
        'xs': '0.75rem',    // 12px
        'sm': '0.875rem',   // 14px
        'base': '1rem',     // 16px
        'lg': '1.125rem',   // 18px
        'xl': '1.25rem',    // 20px
        '2xl': '1.5rem',    // 24px
        '3xl': '1.875rem',  // 30px
        '4xl': '2.25rem',   // 36px
        '5xl': '3rem',      // 48px
        '6xl': '3.75rem',   // 60px
      },
    },
  },
  plugins: [],
}