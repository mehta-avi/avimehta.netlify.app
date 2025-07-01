/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Inter', 'sans-serif', 'system-ui'],
      'serif': ['Cambria', 'serif' , 'Georgia'],
      'mono': ['Menlo', 'Monaco', 'Consolas', 'SFMono-Regular'],
    }
  },
  plugins: [],
}

