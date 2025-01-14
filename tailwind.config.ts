// tailwind.config.js

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Include all files in the 'app' directory
    './components/**/*.{js,ts,jsx,tsx}', // Include all files in the 'components' directory
    './pages/**/*.{js,ts,jsx,tsx}', // If using the 'pages' directory
    './public/**/*.html', // Include HTML files in 'public' (if any)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
