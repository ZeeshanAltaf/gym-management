module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#F04F23",
          "secondary": "#8E8E8E",
          "accent": "#FBF8F6",
          "neutral": "#F3F4F6",
          "base-100": "#ffffff",
          "success": "#7CBC71",
          "warning": "#FBB848",
          "info": "#FFEEEA",
        },
      }
    ],
  },
  plugins: [require("daisyui")],
}