/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Inter": "Inter",
        "Great": "Great Vibes",
        "BoldHelvetica": "Helvetica-Bold",
        "LightHelvetica": "Helvetica-Light",
        "ObliqueHelvetica": "Helvetica-Oblique",
        "Helvetica": "Helvetica"
      },
      colors: {
      },
      backgroundImage: {
        "banner": "url('./assets/images/banner.png')",
        "banner2": "url('./assets/images/banner2.png')",
        "store": "url('./assets/images/ad.png')",
        "homeHero": "url('./assets/images/homepage.png')"

      },
      boxShadow: {
        "form": "0px 4px 80px rgba(255, 159, 13, 0.15)"
      }
    },
  },
  plugins: [],
}
