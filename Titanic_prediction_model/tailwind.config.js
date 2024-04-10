/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/home.html", 
            "./templates/quiz.html"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {},
  },
  plugins: [],
}

