/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideInTop: {
          '0%': { transform: 'translateY(-30px)', opacity: '1' },
          '100%': { transform: 'translateY(0) rotate(-90deg)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-10px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        slideInTop: 'slideInTop 1.2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        slideInLeft: 'slideInLeft 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
      },
    },
  },
  plugins: [],
}

