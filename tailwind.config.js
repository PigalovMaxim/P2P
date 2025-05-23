/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
    theme: {
      extend: {
        colors: {
          'bgcolor': '#2D3250',
          'block': '#424769',
          'light-block': '#7077A1',
          'highlight': '#F6B17A'
        },
        spacing: {
          'marketplace-list-max-height': '350px'
        },
        gridTemplateColumns: {
          'marketplace-grid': '40px 10% 1fr 10% 20%',
        }
      }
    },
  }