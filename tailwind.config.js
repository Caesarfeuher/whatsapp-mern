/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
     extend: {
      colors:{
         colos:'#dadbd3' ,
         kante:'#ededed' ,
         chat: '#dcf8c6' ,
      },
      boxShadow: {
        'shade': '-1px 4px 20px -6px rgba(0, 0, 0.75)',
      }
     },
     
  },
  plugins: [],
}

