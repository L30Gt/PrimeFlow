/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        prime: {
          azul: '#116f98',
          'azul-25': 'rgba(17,111,152,0.25)',
          'azul-logo': '#14a1dd',
          'cinza-card': '#b0c5ce',
          preto: '#424a4d',
          'preto-60': 'rgba(66,74,77,0.6)',
          'preto-50': 'rgba(66,74,77,0.5)',
          'branco-bord': '#e6e6e6',
          'card-bg': '#f6f6f6',
          'board-bg': '#f9f9f9',
          white: '#ffffff',
        }
      },
      fontFamily: {
        sans: ['"Roboto Flex"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'logo': '16px',
        'col': '10px',
        'card': '10px',
        'prazo': '4px',
        'search': '8px',
        'proj': '8px',
        'modal': '15px',
        'desc': '25px',
        'form': '7px',
        'btn': '10px',
      },
      spacing: {
        'sidebar': '260px',
      }
    },
  },
  plugins: [],
}

