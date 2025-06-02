module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'neon-blue': '#00FFFF',
        'neon-green': '#39FF14',
        'neon-purple': '#9D00FF',
      },
      boxShadow: {
        neon: "0 0 10px #00FFFF, 0 0 20px #39FF14",
      },
    },
  },
  plugins: [],
};
