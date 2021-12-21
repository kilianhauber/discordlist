module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dcdark: "#1C1B29",
        dclight: "#292841",
        discordblue: '#5865F2',
        ultrablue: '#0076FF' 
      },
      fontFamily: {
        nunito: ["'Nunito', sans-serif"],
        delagothicone: ["'Dela Gothic One', sans-serif"],
      },
      ants: {
        extend: {},
      },
      plugins: [],
    }
  }
}