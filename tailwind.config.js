/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['sans-serif', 'system-ui', 'poppins'],
      'serif': ['Cambria', 'serif' , 'Georgia'],
      'mono': ['Menlo', 'Monaco', 'Consolas', 'SFMono-Regular'],
      'rubik': ['Rubik']
    }
  },
  plugins: [],
}

