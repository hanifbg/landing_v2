// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      // If you have a 'src' directory, also include it like this:
      "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        // You can extend Tailwind's default theme here.
        // For example, to add custom colors:
        // colors: {
        //   'primary': '#FF6347',
        //   'secondary': '#6A5ACD',
        // },
      },
    },
    plugins: [
      // Add Tailwind CSS plugins here, for example:
      // require('@tailwindcss/typography'),
      // require('@tailwindcss/forms'),
    ],
  };