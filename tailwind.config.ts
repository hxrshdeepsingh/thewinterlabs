import type { Config } from 'tailwindcss'
import animate from 'tailwindcss-animate'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: 'var(--blue)',
          light: 'var(--blue-light)',
        },
        red: {
          DEFAULT: 'var(--red)',
          light: 'var(--red-light)',
        },
        orange: {
          DEFAULT: 'var(--orange)',
          light: 'var(--orange-light)',
        },
      },
    },
  },
  plugins: [animate],
}

export default config
