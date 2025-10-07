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
        '2xl': '6rem',
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
          
      fontSize: {
        'sm-vw': 'clamp(12px, 1vw, 14px)',      // ~ text-sm
        'base-vw': 'clamp(14px, 1.2vw, 16px)',  // ~ text-base
        'lg-vw': 'clamp(16px, 1.4vw, 18px)',    // ~ text-lg
        'xl-vw': 'clamp(18px, 1.6vw, 20px)',    // ~ text-xl
        '2xl-vw': 'clamp(20px, 2vw, 24px)',     // ~ text-2xl
        '3xl-vw': 'clamp(24px, 2.5vw, 30px)',   // ~ text-3xl
        '4xl-vw': 'clamp(30px, 3vw, 36px)',     // ~ text-4xl
        '5xl-vw': 'clamp(36px, 4vw, 48px)',     // ~ text-5xl
      },
      colors: {
        gold: "#96722C",
        light: "#3C3C3C",
      },
    },
  },
  plugins: [],
}
