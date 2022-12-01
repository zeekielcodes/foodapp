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
      backgroundImage: {
        "banner": "url('./assets/images/banner.png')"
      }
    },
  },
  plugins: [],
}
