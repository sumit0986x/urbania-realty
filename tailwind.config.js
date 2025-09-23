module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
        padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        lgx: '3rem',
        // xl: '5rem',
        // '2xl': '6rem',
      },
    },
    extend: {
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["Source Sans 3", "sans-serif"],
      },
      screens: {
        xs: "480px",  
        lgx: "900px", 
      },
    },
  },
  plugins: [],
}
