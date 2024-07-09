/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        'calc-half': 'calc(70vw - 3.5rem)',  // Example usage
        // Add more custom calculations as needed
      }
    }
  },

  plugins: [],
}

